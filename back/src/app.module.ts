import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ChampionsController } from './champions/champions.controller';
import { ChampionService } from './champion/champion.service';
import { ItemsController } from './items/items.controller';
import { ItemService } from './item/item.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ChampionsController, ItemsController],
  providers: [AppService, ChampionService, ItemService,],
})
export class AppModule { }
