import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GridConnectionDocument } from 'src/schemas/connection.schema';

@Injectable()
export class ConnectionsService {
  //constructor import the model
  constructor(
    @InjectModel('GridConnection')
    private gridConnectionModel: Model<GridConnectionDocument>,
  ) {}

  //create a function to get all connections for an element
  async getAllConnectionsForElement(elementId: string) {
    return await this.gridConnectionModel.find({ elementId });
  }

  //create a function to get a connection by id
  async getConnectionById(connectionId: string) {
    return await this.gridConnectionModel.findById(connectionId);
  }

  //create a function to create a connection
  async createConnection(connection: any) {
    return await this.gridConnectionModel.create(connection);
  }

  //create a function to update a connection
  async updateConnection(connection: any) {
    return await this.gridConnectionModel.findByIdAndUpdate({
      id: connection._id,
      connection,
    });
  }

  //create a function to delete a connection
  async deleteConnection(connectionId: string) {
    return await this.gridConnectionModel.findByIdAndDelete(connectionId);
  }

  //create a function to delete all connections for an element
  async deleteAllConnectionsForElement(elementId: string) {
    return await this.gridConnectionModel.deleteMany({ elementId: elementId });
  }

  async deleteAllConnectionsForFunction(functionId: string) {
    //delete if "in" === functionID; delete if "out" === functionId
    return await this.gridConnectionModel.deleteMany({
      $or: [{ in: functionId }, { out: functionId }],
    });
  }

  //create a function to delete all connections
  async deleteAllConnections() {
    return await this.gridConnectionModel.deleteMany({});
  }
}
