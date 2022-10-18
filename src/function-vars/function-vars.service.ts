import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GridFunctionVar } from 'src/schemas/functionVar.schema';

@Injectable()
export class FunctionVarsService {
  //constructor import the model
  constructor(
    @InjectModel('GridFunctionVar')
    private gridFunctionVarModel: Model<GridFunctionVar>,
  ) {}

  async removeAllForElement(elementId: string) {
    return await this.gridFunctionVarModel.deleteMany({ elementId: elementId });
  }
  async removeAllForFunction(functionId: string) {
    return await this.gridFunctionVarModel.deleteMany({
      functionId: functionId,
    });
  }
  async findAll() {
    return await this.gridFunctionVarModel.find();
  }
  async findAllForElement(elementId: string) {
    return await this.gridFunctionVarModel.find({ elementId });
  }
  async findOne(functionId: string) {
    return await this.gridFunctionVarModel.findOne({ functionId });
  }
  async update(functionVarId: string, body: any) {
    return await this.gridFunctionVarModel.findByIdAndUpdate(
      functionVarId,
      body,
      { new: true },
    );
  }
  async remove(functionVarId: number) {
    return await this.gridFunctionVarModel.findByIdAndDelete(functionVarId);
  }
  async create(body: any) {
    return await this.gridFunctionVarModel.create(body);
  }
  async removeAll() {
    return await this.gridFunctionVarModel.deleteMany({});
  }
}
