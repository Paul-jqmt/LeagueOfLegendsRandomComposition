import { Controller, Get } from '@nestjs/common';
import { FinalItemService } from 'src/final-item/final-item.service';

@Controller('final-items')
export class FinalItemsController {
    constructor(private readonly finalItemService: FinalItemService) { }
    
    @Get()
    async getFinalItems() {
        return this.finalItemService.getItems();
    }
}

