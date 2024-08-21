import { Controller, Get } from '@nestjs/common';
import { BootService } from 'src/boot/boot.service';

@Controller('boots')
export class BootsController {
    constructor(private readonly bootService: BootService) { }

    @Get()
    async getAllItems() {
        return this.bootService.getItems();
    }

}
