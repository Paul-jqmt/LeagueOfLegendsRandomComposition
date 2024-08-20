import { Controller, Get } from '@nestjs/common';
import { ChampionService } from 'src/champion/champion.service';

@Controller('champions')
export class ChampionsController {
    constructor(private readonly championService: ChampionService) {}

    @Get()
    async getAllChampions() {
        return this.championService.getChampions();
    }
}
