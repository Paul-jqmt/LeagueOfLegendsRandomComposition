import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ChampionsController } from './champions/champions.controller';
import { ChampionService } from './champion/champion.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ChampionsController],
  providers: [AppService, ChampionService,],
})
export class AppModule { }
