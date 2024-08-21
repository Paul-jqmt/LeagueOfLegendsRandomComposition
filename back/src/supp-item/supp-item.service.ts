import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SuppItemService {
    private readonly jsonFilePath = path.join(process.cwd(), 'src', 'json', 'item.json');

    async getItems() {
        // récupère les données du json en suite de char
        const fileContents = fs.readFileSync(this.jsonFilePath, 'utf-8');
        // transforme les caractères en objet JS
        const data = JSON.parse(fileContents);

        const supp = data['items']['support_items'];

        // for loop pour récuperer un slot de bottes
        function getSuppItem() {
            let index = Math.floor(Math.random() * supp.length)
            let choseSupp = supp[index]
            return choseSupp;
        }

        return getSuppItem();
    }
}
