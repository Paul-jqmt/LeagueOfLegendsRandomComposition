import { Test, TestingModule } from '@nestjs/testing';
import { SuppItemsController } from './supp-items.controller';

describe('SuppItemsController', () => {
  let controller: SuppItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppItemsController],
    }).compile();

    controller = module.get<SuppItemsController>(SuppItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
