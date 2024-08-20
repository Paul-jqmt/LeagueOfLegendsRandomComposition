import { Controller, Get } from '@nestjs/common';
import { ItemService } from 'src/item/item.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    async getAllItems() {
        return this.itemService.getItems();
    }
    
}
