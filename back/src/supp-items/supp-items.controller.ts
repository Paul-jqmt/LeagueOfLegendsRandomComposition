import { Controller, Get } from '@nestjs/common';
import { SuppItemService } from 'src/supp-item/supp-item.service';

@Controller('supp-items')
export class SuppItemsController {
    constructor(private readonly suppItemService: SuppItemService) { }

    @Get()
    async getAllItems() {
        return this.suppItemService.getItems();
    }

}
