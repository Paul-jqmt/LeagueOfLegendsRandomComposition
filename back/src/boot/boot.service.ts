import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BootService {
    private readonly jsonFilePath = path.join(process.cwd(), 'src', 'json', 'item.json');
    private readonly dragonUrl = 'https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/item.json';

    constructor(private readonly httpService: HttpService) { }
    async getItems() {
        // récupère les données du json en suite de char
        const fileContents = fs.readFileSync(this.jsonFilePath, 'utf-8');
        // transforme les caractères en objet JS
        const data = JSON.parse(fileContents);

        const boots = data['items']['boots'];

        // récupère les items Ddragon API
        let responseDragon = await firstValueFrom(this.httpService.get(this.dragonUrl));
        let dragonData = responseDragon.data;
        const itemsArray = Object.values(dragonData["data"]);  // Convertit les valeurs de l'objet en tableau

        // for loop pour récuperer un slot de bottes
        function getBoots() {
            let index = Math.floor(Math.random() * boots.length)
            let choseBoots = boots[index]
            let url = `https://ddragon.leagueoflegends.com/cdn/${dragonData['version']}/img/item/${choseBoots}.png`
            return url;
        }
        return getBoots();
    }
}
