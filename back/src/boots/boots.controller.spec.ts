import { Test, TestingModule } from '@nestjs/testing';
import { BootsController } from './boots.controller';

describe('BootsController', () => {
  let controller: BootsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BootsController],
    }).compile();

    controller = module.get<BootsController>(BootsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
