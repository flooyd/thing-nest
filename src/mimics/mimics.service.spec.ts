import { Test, TestingModule } from '@nestjs/testing';
import { MimicsService } from './mimics.service';

describe('MimicsService', () => {
  let service: MimicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MimicsService],
    }).compile();

    service = module.get<MimicsService>(MimicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
