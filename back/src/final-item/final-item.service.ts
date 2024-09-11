import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class FinalItemService {
    private readonly bootsUrl = 'http://localhost:3000/boots';
    private readonly suppUrl = 'http://localhost:3000/supp-items';
    private readonly dragonUrl = 'https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/item.json';
    private readonly jsonFilePath = path.join(process.cwd(), 'src', 'json', 'item.json');
    


    constructor(private readonly httpService: HttpService) { }
    async getItems() {

        // récupère les données du json en suite de char
        const fileContents = fs.readFileSync(this.jsonFilePath, 'utf-8');
        // transforme les caractères en objet JS
        const data = JSON.parse(fileContents);
        const item = data["items"]["items"];

        // récupère les items Ddragon API
        let responseDragon = await firstValueFrom(this.httpService.get(this.dragonUrl));
        let dragonData = responseDragon.data;
        const itemsArray = Object.values(dragonData["data"]);  // Convertit les valeurs de l'objet en tableau

        // récupère les items supp
        let responseSupp = await firstValueFrom(this.httpService.get(this.suppUrl));
        let suppData = responseSupp.data;
        let suppFinalItem;

        for(let i = 0; i < itemsArray.length; i++){
            if(suppData === itemsArray[i]["name"]){
                suppFinalItem = `https://ddragon.leagueoflegends.com/cdn/${dragonData['version']}/img/item/${itemsArray[i]["image"]["full"]}`
            }
        }

        let boots = [];

        // génère 5 bottes que je stock dans boots []
        for (let i = 0; i < 5; i++) {
            // récupère les bottes
            let responseBoots = await firstValueFrom(this.httpService.get(this.bootsUrl));
            let bootsData = responseBoots.data;
            boots.push(bootsData);

        }
        // stock les noms d'items
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
            while(stuff[key].length < 5) {
                let index = Math.floor(Math.random() * item.length);
                if(!stuff[key].includes(item[index])){
                    stuff[key].push(item[index]);
                }
            }
        }
        // stock les urls d'images  des items
        let stuffPng: { [lane: string]: string[] } = {
            lane1: [],
            lane2: [],
            lane3: [],
            lane4: [],
            lane5: []
        };

        for (let i = 0; i < 5; i++) {
            const key = `lane${i + 1}`;
            for (let j = 0; j < 5; j++) {
                for (let k = 0; k < itemsArray.length; k++) {
                    if (stuff[key][j] === itemsArray[k]["name"]) {
                        stuffPng[key].push(`https://ddragon.leagueoflegends.com/cdn/${dragonData['version']}/img/item/${itemsArray[k]["image"]["full"]}`);
                        break;  // Arrête la boucle dès qu'une correspondance est trouvée
                    }
                }
            }
        }
        


        return {
            boots,
            suppFinalItem,
            stuffPng
        };
    }
}
