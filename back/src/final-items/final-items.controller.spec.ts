import { Test, TestingModule } from '@nestjs/testing';
import { FinalItemsController } from './final-items.controller';

describe('FinalItemsController', () => {
  let controller: FinalItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalItemsController],
    }).compile();

    controller = module.get<FinalItemsController>(FinalItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
