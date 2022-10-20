import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConnectionsService } from './connections.service';

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @Get('/forElement/:elementId')
  async getAllConnectionsForElement(@Param() params: any) {
    return await this.connectionsService.getAllConnectionsForElement(
      params.elementId,
    );
  }

  @Get('/:connectionId')
  async getConnectionById(@Param() connectionId: string) {
    return await this.connectionsService.getConnectionById(connectionId);
  }

  @Post()
  async createConnection(@Body() connection: any) {
    return await this.connectionsService.createConnection(connection);
  }

  @Put('/update')
  async updateConnection(@Body() connection: any) {
    return await this.connectionsService.updateConnection(connection);
  }

  @Delete('/:connectionId')
  async deleteConnection(@Param() connectionId: string) {
    return await this.connectionsService.deleteConnection(connectionId);
  }

  @Delete('/deleteAll/forElement/:elementId')
  async deleteAllConnectionsForElement(@Param() elementId: string) {
    return await this.connectionsService.deleteAllConnectionsForElement(
      elementId,
    );
  }

  @Delete('/deleteAll/forFunction/:functionId')
  async deleteAllConnectionsForFunction(@Param() params: any) {
    console.log(params.functionId);
    return await this.connectionsService.deleteAllConnectionsForFunction(
      params.functionId,
    );
  }

  @Delete('/deleteAll')
  async deleteAllConnections() {
    return await this.connectionsService.deleteAllConnections();
  }
}
