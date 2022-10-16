import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThingDocument = Thing & Document;

@Schema()
export class Thing {
  @Prop()
  @Optional()
  name: string;

  @Prop()
  @Optional()
  description: string;

  @Prop()
  @Optional()
  background: string;

  @Prop()
  @Optional()
  color: string;

  @Prop()
  @Optional()
  fontSize: string;

  @Prop()
  @Optional()
  fontWeight: string;

  @Prop()
  @Optional()
  fontStyle: string;

  @Prop()
  @Optional()
  textDecoration: string;

  @Prop()
  @Optional()
  textTransform: string;

  @Prop()
  @Optional()
  textAlign: string;

  @Prop()
  @Optional()
  lineHeight: string;

  @Prop()
  @Optional()
  letterSpacing: string;

  @Prop()
  @Optional()
  padding: string;

  @Prop()
  @Optional()
  paddingTop: string;

  @Prop()
  @Optional()
  paddingRight: string;

  @Prop()
  @Optional()
  paddingBottom: string;

  @Prop()
  @Optional()
  paddingLeft: string;

  @Prop()
  @Optional()
  margin: string;

  @Prop()
  @Optional()
  marginTop: string;

  @Prop()
  @Optional()
  marginRight: string;

  @Prop()
  @Optional()
  marginBottom: string;

  @Prop()
  @Optional()
  marginLeft: string;

  @Prop()
  @Optional()
  border: string;

  @Prop()
  @Optional()
  borderRadius: string;

  @Prop()
  @Optional()
  boxShadow: string;

  @Prop()
  @Optional()
  width: string;

  @Prop()
  @Optional()
  height: string;

  @Prop()
  @Optional()
  minWidth: string;

  @Prop()
  @Optional()
  minHeight: string;

  @Prop()
  @Optional()
  maxWidth: string;

  @Prop()
  @Optional()
  maxHeight: string;

  @Prop()
  @Optional()
  overflow: string;

  @Prop()
  @Optional()
  overflowX: string;

  @Prop()
  @Optional()
  overflowY: string;

  @Prop()
  @Optional()
  display: string;

  @Prop()
  @Optional()
  flexDirection: string;

  @Prop()
  @Optional()
  flexWrap: string;

  @Prop()
  @Optional()
  justifyContent: string;

  @Prop()
  @Optional()
  alignItems: string;

  @Prop()
  @Optional()
  alignContent: string;

  @Prop()
  @Optional()
  order: string;

  @Prop()
  @Optional()
  flexGrow: string;

  @Prop()
  @Optional()
  flexShrink: string;

  @Prop()
  @Optional()
  flexBasis: string;

  @Prop()
  @Optional()
  alignSelf: string;

  @Prop()
  @Optional()
  position: string;

  @Prop()
  @Optional()
  top: string;

  @Prop()
  @Optional()
  right: string;

  @Prop()
  @Optional()
  bottom: string;

  @Prop()
  @Optional()
  left: string;

  @Prop()
  @Optional()
  zIndex: string;

  @Prop()
  @Optional()
  flex: string;

  @Prop()
  @Optional()
  float: string;

  @Prop()
  @Optional()
  clear: string;

  @Prop()
  @Optional()
  visibility: string;

  @Prop()
  @Optional()
  opacity: string;

  @Prop()
  @Optional()
  backgroundColor: string;

  @Prop()
  @Optional()
  backgroundImage: string;

  @Prop()
  @Optional()
  backgroundSize: string;

  @Prop()
  @Optional()
  backgroundPosition: string;

  @Prop()
  @Optional()
  backgroundRepeat: string;

  @Prop()
  @Optional()
  backgroundAttachment: string;

  @Prop()
  @Optional()
  backgroundOrigin: string;

  @Prop()
  @Optional()
  backgroundClip: string;

  @Prop()
  @Optional()
  backgroundBlendMode: string;

  @Prop()
  @Optional()
  borderColor: string;

  @Prop()
  @Optional()
  borderStyle: string;

  @Prop()
  @Optional()
  borderWidth: string;

  @Prop()
  @Optional()
  borderTop: string;

  @Prop()
  @Optional()
  borderRight: string;

  @Prop()
  @Optional()
  borderBottom: string;

  @Prop()
  @Optional()
  childOf: string;

  @Prop()
  @Optional()
  parentOf: [string];

  @Prop()
  type: string;

  @Prop()
  @Optional()
  content: string;
}

export const ThingSchema = SchemaFactory.createForClass(Thing);
