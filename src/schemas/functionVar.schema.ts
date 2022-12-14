import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GridFunctionVarDocument = GridFunctionVar & Document;

@Schema({ autoIndex: true })
export class GridFunctionVar {
  @Prop()
  name: string;

  @Prop()
  dateAdded: Date;

  @Prop({ type: MongooseSchema.Types.Mixed })
  @Optional()
  value: string | number | boolean | null | undefined | object;

  @Prop({ default: true })
  @Optional()
  readonly: boolean;

  @Prop()
  type: string; // 'string' | 'number' | 'boolean' | 'object' | 'null' | 'undefined' | 'createStore' | 'updateStore' | 'subscribe' | 'unsubscribe';

  @Prop()
  @Optional()
  componentName: string;
}

const GridFunctionVarSchema = SchemaFactory.createForClass(GridFunctionVar);
//make sure that there is only 1 var with the same name per element
GridFunctionVarSchema.index(
  { elementId: 1, name: 1 },
  {
    unique: true,
  },
);
//make sure that there is only 1 var with the same name per component
GridFunctionVarSchema.index(
  { componentName: 1, name: 1 },
  {
    unique: true,
  },
);

export { GridFunctionVarSchema };
