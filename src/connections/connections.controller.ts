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

  @Get('/forComponent/:componentName')
  async getAllConnectionsforComponent(@Param() params: any) {
    return await this.connectionsService.getAllConnectionsforComponent(
      params.componentName,
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
  async deleteConnection(@Param() params: any) {
    return await this.connectionsService.deleteConnection(params.connectionId);
  }

  @Delete('/deleteAll/forComponent/:elementId')
  async deleteAllConnectionsforComponent(@Param() elementId: string) {
    return await this.connectionsService.deleteAllConnectionsforComponent(
      elementId,
    );
  }

  @Delete('/deleteAll/forFunction/:functionId')
  async deleteAllConnectionsForFunction(@Param() params: any) {
    return await this.connectionsService.deleteAllConnectionsForFunction(
      params.functionId,
    );
  }

  @Delete('/deleteAll')
  async deleteAllConnections() {
    return await this.connectionsService.deleteAllConnections();
  }
}
