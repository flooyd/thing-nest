import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ThingDocument } from 'src/schemas/thing.schema';

@Injectable()
export class ThingService {
  constructor(@InjectModel('Thing') private thingModel: Model<ThingDocument>) {}

  async create(thing: ThingDocument): Promise<ThingDocument> {
    const createdThing = new this.thingModel(thing);
    return createdThing.save();
  }

  async findAll(): Promise<ThingDocument[]> {
    return this.thingModel.find().exec();
  }

  async deleteAll() {
    return this.thingModel.deleteMany({}).exec();
  }

  async update(thing: ThingDocument): Promise<ThingDocument> {
    return this.thingModel
      .findOneAndUpdate({ _id: thing._id }, thing, { new: true })
      .exec();
  }

  async delete(id: string): Promise<ThingDocument> {
    return this.thingModel.findByIdAndRemove({ _id: id }).exec();
  }
}
