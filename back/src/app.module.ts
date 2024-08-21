import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ChampionsController } from './champions/champions.controller';
import { ChampionService } from './champion/champion.service';
import { BootService } from './boot/boot.service';
import { BootsController } from './boots/boots.controller';
import { SuppItemService } from './supp-item/supp-item.service';
import { SuppItemsController } from './supp-items/supp-items.controller';
import { FinalItemsController } from './final-items/final-items.controller';
import { FinalItemService } from './final-item/final-item.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ChampionsController, BootsController, SuppItemsController, FinalItemsController],
  providers: [AppService, ChampionService, BootService, SuppItemService, FinalItemService,],
})
export class AppModule { }
