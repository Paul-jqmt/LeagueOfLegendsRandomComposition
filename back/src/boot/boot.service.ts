import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BootService {
    private readonly jsonFilePath = path.join(process.cwd(), 'src', 'json', 'item.json');

    async getItems() {
        // récupère les données du json en suite de char
        const fileContents = fs.readFileSync(this.jsonFilePath, 'utf-8');
        // transforme les caractères en objet JS
        const data = JSON.parse(fileContents);

        const boots = data['items']['boots'];

        // for loop pour récuperer un slot de bottes
        function getBoots() {
            let index = Math.floor(Math.random() * boots.length)
            let choseBoots = boots[index]
            return choseBoots;
        }

        return getBoots();
    }
}
