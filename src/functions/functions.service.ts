import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FunctionDocument } from 'src/schemas/function.schema';

@Injectable()
export class FunctionsService {
  constructor(
    @InjectModel('Function') private functionModel: Model<FunctionDocument>,
  ) {}
  create(body) {
    const createdFunction = new this.functionModel(body);
    return createdFunction.save();
  }

  findAll() {
    return this.functionModel.find().exec();
  }

  findOne(id: number) {
    return this.functionModel.findById(id).exec();
  }

  update(id: number) {
    return `This action updates a #${id} function`;
  }

  remove(id: number) {
    return this.functionModel.findByIdAndRemove({ _id: id }).exec();
  }

  removeAll(elementId: string) {
    return this.functionModel.deleteMany({ elementId }).exec();
  }
}
