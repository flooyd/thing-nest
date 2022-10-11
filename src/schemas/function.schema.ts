import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FunctionDocument = Function & Document;

@Schema()
export class Function {
  @Prop()
  type: string;

  @Prop()
  elementId: string;
}

export const FunctionSchema = SchemaFactory.createForClass(Function);
FunctionSchema.index(
  { type: 1, functionId: 1 },
  { unique: true, partialFilterExpression: { type: { $in: ['mount'] } } },
);
