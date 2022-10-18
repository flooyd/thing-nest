import { Module } from '@nestjs/common';
import { FunctionVarsService } from './function-vars.service';
import { FunctionVarsController } from './function-vars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GridFunctionVarSchema } from 'src/schemas/functionVar.schema';

@Module({
  controllers: [FunctionVarsController],
  providers: [FunctionVarsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'GridFunctionVar', schema: GridFunctionVarSchema },
    ]),
  ],
})
export class FunctionVarsModule {}
