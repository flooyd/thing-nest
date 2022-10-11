import { Test, TestingModule } from '@nestjs/testing';
import { ThingController } from './thing.controller';

describe('ThingController', () => {
  let controller: ThingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThingController],
    }).compile();

    controller = module.get<ThingController>(ThingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
