import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GridFunctionDocument = GridFunction & Document;

@Schema({ autoIndex: true })
export class GridFunction {
  @Prop()
  name: string;

  @Prop({ default: false })
  @Optional()
  isVariable: boolean;

  @Prop()
  @Optional()
  variableId: MongooseSchema.Types.ObjectId;

  @Prop()
  @Optional()
  componentName: string;

  @Prop()
  rectX: number;

  @Prop()
  rectY: number;

  @Prop()
  @Optional()
  inArrowX: number;

  @Prop()
  @Optional()
  outArrowX: number;
}

const GridFunctionSchema = SchemaFactory.createForClass(GridFunction);
//allow only 1 function with name of onMount OR afterUpdate OR beforeUpdate OR beforeDestroy OR afterDestroy
GridFunctionSchema.index(
  { componentName: 1, name: 1 },
  {
    unique: true,
    partialFilterExpression: {
      $or: [
        { name: 'onMount' },
        { name: 'afterUpdate' },
        { name: 'beforeUpdate' },
        { name: 'beforeDestroy' },
        { name: 'afterDestroy' },
        { name: 'onClick' },
      ],
    },
  },
);

export { GridFunctionSchema };
