import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FunctionsService } from './functions.service';

@Controller('functions')
export class FunctionsController {
  constructor(private readonly functionsService: FunctionsService) {}

  @Post()
  create(@Body() body) {
    return this.functionsService.create(body);
  }

  @Get()
  findAll() {
    return this.functionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.functionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.functionsService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.functionsService.remove(+id);
  }

  @Delete()
  removeAll(@Param('functionId') functionId: string) {
    return this.functionsService.removeAll(functionId);
  }
}
