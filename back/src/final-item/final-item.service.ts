import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class FinalItemService {
    private readonly bootsUrl = 'http://localhost:3000/boots';
    private readonly suppUrl = 'http://localhost:3000/supp-items';
    private readonly jsonFilePath = path.join(process.cwd(), 'src', 'json', 'item.json');


    constructor(private readonly httpService: HttpService) { }
    async getItems() {

        // récupère les données du json en suite de char
        const fileContents = fs.readFileSync(this.jsonFilePath, 'utf-8');
        // transforme les caractères en objet JS
        const data = JSON.parse(fileContents);
        const item = data["items"]["items"];

        // récupère les items supp
        let responseSupp = await firstValueFrom(this.httpService.get(this.suppUrl));
        let suppData = responseSupp.data;

        let boots = [];

        // génère 5 bottes que je stock dans boots []
        for (let i = 0; i < 5; i++) {
            // récupère les bottes
            let responseBoots = await firstValueFrom(this.httpService.get(this.bootsUrl));
            let bootsData = responseBoots.data;
            boots.push(bootsData);

        }

        let stuff: { [lane: string]: string[] } = {
            lane1: [],
            lane2: [],
            lane3: [],
            lane4: [],
            lane5: []
        };

        // génère les items
        for (let i = 0; i < 5; i++) {
            const key = `lane${i + 1}`
            for (let j = 0; j < 5; j++) {
                let index = Math.floor(Math.random() * item.length);
                stuff[key].push(item[index]);
            }
        }

        

        return {
            boots,
            suppData,
            stuff
        };
    }
}
