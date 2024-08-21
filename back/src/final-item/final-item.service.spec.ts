import { Test, TestingModule } from '@nestjs/testing';
import { FinalItemService } from './final-item.service';

describe('FinalItemService', () => {
  let service: FinalItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalItemService],
    }).compile();

    service = module.get<FinalItemService>(FinalItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
