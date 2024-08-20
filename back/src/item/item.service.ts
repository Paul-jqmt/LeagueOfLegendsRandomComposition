import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class ItemService {
    private readonly apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/item.json'

    constructor(private readonly httpService: HttpService) { }

    async getItems() {

        const response = await firstValueFrom(this.httpService.get(this.apiUrl));
        const data = response.data["data"];

        const completeItems = Object.keys(data).filter(itemId => {
            const item = data[itemId]
            return !item.into && item.gold.total > 1000;
        }).map(itemId => {
            return {
                id: itemId,
                name: data[itemId].name,
                imageUrl: `https://ddragon.leagueoflegends.com/cdn/${response.data['version']}/img/item/${data[itemId].image.full}`,
                gold: data[itemId].gold.total
            };
        })

        return completeItems;
    }
}
