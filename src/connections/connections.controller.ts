import { Body, Controller, Get, Param } from '@nestjs/common';
import { ConnectionsService } from './connections.service';

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @Get('/all/:elementId')
  async getAllConnectionsForElement(@Param() elementId: string) {
    return await this.connectionsService.getAllConnectionsForElement(elementId);
  }

  @Get('/:connectionId')
  async getConnectionById(@Param() connectionId: string) {
    return await this.connectionsService.getConnectionById(connectionId);
  }

  @Get('/create/:connection')
  async createConnection(@Body() connection: any) {
    return await this.connectionsService.createConnection(connection);
  }

  @Get('/update/:connectionId/:connection')
  async updateConnection(
    @Param() connectionId: string,
    @Body() connection: any,
  ) {
    return await this.connectionsService.updateConnection(
      connectionId,
      connection,
    );
  }

  @Get('/delete/:connectionId')
  async deleteConnection(@Param() connectionId: string) {
    return await this.connectionsService.deleteConnection(connectionId);
  }

  @Get('/deleteAll/:elementId')
  async deleteAllConnectionsForElement(@Param() elementId: string) {
    return await this.connectionsService.deleteAllConnectionsForElement(
      elementId,
    );
  }
}
