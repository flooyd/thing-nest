import { Module } from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { ConnectionsController } from './connections.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GridConnectionSchema } from 'src/schemas/connection.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'GridConnection', schema: GridConnectionSchema },
    ]),
  ],
  controllers: [ConnectionsController],
  providers: [ConnectionsService],
})
export class ConnectionsModule {}
