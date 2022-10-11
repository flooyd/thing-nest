import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingModule } from './thing/thing.module';
import { FunctionsModule } from './functions/functions.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ThingModule, FunctionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
