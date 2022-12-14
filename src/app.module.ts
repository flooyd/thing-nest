import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingModule } from './thing/thing.module';
import { FunctionsModule } from './functions/functions.module';
import { ConnectionsModule } from './connections/connections.module';
import { FunctionVarsModule } from './function-vars/function-vars.module';
import { MimicsModule } from './mimics/mimics.module';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ThingModule, FunctionsModule, ConnectionsModule, FunctionVarsModule, MimicsModule, ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
