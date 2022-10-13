//import mongoose modules
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
  elementId: string;
}

//create a schema factory for the document
const GridConnectionSchema = SchemaFactory.createForClass(GridConnection);
//create a compuound index on all 3 properties
GridConnectionSchema.index({ in: 1, out: 1, elementId: 1 }, { unique: true });

//export the schema
export { GridConnectionSchema };
