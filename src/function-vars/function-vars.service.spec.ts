import { Test, TestingModule } from '@nestjs/testing';
import { FunctionVarsService } from './function-vars.service';

describe('FunctionVarsService', () => {
  let service: FunctionVarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionVarsService],
    }).compile();

    service = module.get<FunctionVarsService>(FunctionVarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
