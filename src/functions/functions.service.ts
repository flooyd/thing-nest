import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GridFunctionDocument } from 'src/schemas/function.schema';

@Injectable()
export class FunctionsService {
  constructor(
    @InjectModel('GridFunction')
    private gridFunctionModel: Model<GridFunctionDocument>,
  ) {}

  create(body) {
    const createdFunction = new this.gridFunctionModel(body);
    return createdFunction.save();
  }

  findAll() {
    return this.gridFunctionModel.find().exec();
  }

  findAllByElementId(elementId: string) {
    return this.gridFunctionModel.find({ elementId }).exec();
  }

  findOne(id: number) {
    return this.gridFunctionModel.findById(id).exec();
  }

  update(body) {
    return this.gridFunctionModel
      .findByIdAndUpdate({ _id: body._id }, body, { new: true })
      .exec();
  }

  removeAll() {
    return this.gridFunctionModel.deleteMany().exec();
  }

  async remove(id: string) {
    return await this.gridFunctionModel.findByIdAndRemove({ _id: id }).exec();
  }

  removeAllFromElement(elementId: string) {
    return this.gridFunctionModel.deleteMany({ elementId }).exec();
  }

  dropCollection() {
    return this.gridFunctionModel.collection.drop();
  }
}
