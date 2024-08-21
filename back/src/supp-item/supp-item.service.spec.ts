import { Test, TestingModule } from '@nestjs/testing';
import { SuppItemService } from './supp-item.service';

describe('SuppItemService', () => {
  let service: SuppItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuppItemService],
    }).compile();

    service = module.get<SuppItemService>(SuppItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
