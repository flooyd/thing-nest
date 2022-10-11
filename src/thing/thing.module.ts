import { Module } from '@nestjs/common';
import { ThingService } from './thing.service';
import { ThingController } from './thing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Thing } from 'src/schemas/thing.schema';
import { ThingSchema } from 'src/schemas/thing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Thing.name, schema: ThingSchema }]),
  ],
  providers: [ThingService],
  controllers: [ThingController],
})
export class ThingModule {}
