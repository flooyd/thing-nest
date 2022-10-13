import { Module } from '@nestjs/common';
import { FunctionsService } from './functions.service';
import { FunctionsController } from './functions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GridFunctionSchema } from 'src/schemas/function.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'GridFunction', schema: GridFunctionSchema },
    ]),
  ],
  controllers: [FunctionsController],
  providers: [FunctionsService],
})
export class FunctionsModule {}
