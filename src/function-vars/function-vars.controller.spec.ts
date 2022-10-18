import { Test, TestingModule } from '@nestjs/testing';
import { FunctionVarsController } from './function-vars.controller';
import { FunctionVarsService } from './function-vars.service';

describe('FunctionVarsController', () => {
  let controller: FunctionVarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunctionVarsController],
      providers: [FunctionVarsService],
    }).compile();

    controller = module.get<FunctionVarsController>(FunctionVarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
