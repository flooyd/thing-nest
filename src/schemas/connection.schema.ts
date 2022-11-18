//import mongoose modules
import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

//create a type for the document
export type GridConnectionDocument = GridConnection & Document;

//create a schema for the document
@Schema({ autoIndex: true })
export class GridConnection {
  @Prop()
  in: string;

  @Prop()
  out: string;

  @Prop()
  @Optional()
  componentName: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Variable' })
  @Optional()
  inVariableId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Variable' })
  @Optional()
  outVariableId: string;

  @Prop()
  @Optional()
  inputIndex: number;

  @Prop()
  @Optional()
  outputIndex: number;
}

const GridConnectionSchema = SchemaFactory.createForClass(GridConnection);

//same as above but for component name
GridConnectionSchema.index(
  { in: 1, out: 1, componentName: 1, inputIndex: 1, outputIndex: 1 },
  { unique: true },
);

//export the schema
export { GridConnectionSchema };
