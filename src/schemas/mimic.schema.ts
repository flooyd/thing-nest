import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GridMimicDocument = GridMimic & Document;

@Schema({ autoIndex: true })
export class GridMimic {
  @Prop()
  projectId: MongooseSchema.Types.ObjectId;
  @Prop()
  name: string;
}

const GridMimicSchema = SchemaFactory.createForClass(GridMimic);

//unique index on projectId and name
GridMimicSchema.index({ projectId: 1, name: 1 }, { unique: true });

export { GridMimicSchema };
