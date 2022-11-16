import { Test, TestingModule } from '@nestjs/testing';
import { MimicsController } from './mimics.controller';
import { MimicsService } from './mimics.service';

describe('MimicsController', () => {
  let controller: MimicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MimicsController],
      providers: [MimicsService],
    }).compile();

    controller = module.get<MimicsController>(MimicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
