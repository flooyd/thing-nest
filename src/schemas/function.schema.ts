import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GridFunctionDocument = GridFunction & Document;

@Schema({ autoIndex: true })
export class GridFunction {
  @Prop()
  name: string;

  @Prop()
  elementId: string;

  @Prop()
  rectX: number;

  @Prop()
  rectY: number;

  @Prop()
  inArrowX: number;

  @Prop()
  inArrowYLocations: number[];

  @Prop()
  outArrowX: number;

  @Prop()
  outArrowYLocations: number[];
}

const GridFunctionSchema = SchemaFactory.createForClass(GridFunction);
//allow only 1 function with name of onMount OR afterUpdate OR beforeUpdate OR beforeDestroy OR afterDestroy per element using partial filter expression.
GridFunctionSchema.index(
  { elementId: 1, name: 1 },
  {
    unique: true,
    partialFilterExpression: {
      $or: [
        { name: 'mount' },
        { name: 'afterUpdate' },
        { name: 'beforeUpdate' },
        { name: 'beforeDestroy' },
        { name: 'afterDestroy' },
      ],
    },
  },
);

export { GridFunctionSchema };
