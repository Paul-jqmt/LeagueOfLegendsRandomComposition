import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ChampionsController } from './champions/champions.controller';
import { ChampionService } from './champion/champion.service';
import { BootService } from './boot/boot.service';
import { BootsController } from './boots/boots.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ChampionsController, BootsController],
  providers: [AppService, ChampionService, BootService,],
})
export class AppModule { }
