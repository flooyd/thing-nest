import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ThingDocument } from 'src/schemas/thing.schema';
import { ThingService } from './thing.service';

@Controller('things')
export class ThingController {
  constructor(private readonly thingService: ThingService) {}

  @Get()
  findAll(): Promise<ThingDocument[]> {
    return this.thingService.findAll();
  }

  @Post()
  create(@Body() body): Promise<ThingDocument> {
    return this.thingService.create(body);
  }

  @Put()
  update(@Body() body): Promise<ThingDocument> {
    return this.thingService.update(body);
  }

  @Delete(':id')
  delete(@Param() params): Promise<ThingDocument> {
    console.log(params.id);
    return this.thingService.delete(params.id);
  }

  @Get('deleteAll')
  deleteAll() {
    return this.thingService.deleteAll();
  }
}
