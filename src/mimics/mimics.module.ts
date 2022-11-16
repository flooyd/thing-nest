import { Module } from '@nestjs/common';
import { MimicsService } from './mimics.service';
import { MimicsController } from './mimics.controller';

@Module({
  controllers: [MimicsController],
  providers: [MimicsService]
})
export class MimicsModule {}
