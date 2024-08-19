import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ChampionService {
  private readonly apiUrl = 'https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json';

  constructor(private readonly httpService: HttpService) { }

  async getChampions() {
    let championsIndex: number[] = [];
    const response = await firstValueFrom(this.httpService.get(this.apiUrl));

    // Conversion des clés de l'objet JSON en tableau pour pouvoir utiliser les index
    const jsonToObject = Object.keys(response.data['data']);

    // Choisi un index au hasard et le place dans un array 
    while (championsIndex.length < 5) {
      let num: number = Math.floor(Math.random() * jsonToObject.length);
      if (!championsIndex.includes(num)) {
        championsIndex.push(num)
      }
    }

    // récupère le nom du champion associé à l'index randomizé
    const championNames:string [] = championsIndex.map(function (index) {
      return jsonToObject[index];
    });

    // récupère le nom du png associé au nom du perso
    let png: string[] = [];
    for(let i = 0; i < championsIndex.length; i++){
      png.push(response.data['data'][championNames[i]]['image']['full'])
    }     

    // récupère les images grace à l'api Dragon correspondant au nom des persos
    let championImagesURL: string [] = [];
    for(let i = 0; i < championNames.length; i++){
      championImagesURL.push(`https://ddragon.leagueoflegends.com/cdn/${response.data['version']}/img/champion/${png[i]}`);
    }  
  
    return championImagesURL;
  }
}