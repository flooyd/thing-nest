import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FunctionsService } from './functions.service';

@Controller('functions')
export class FunctionsController {
  constructor(private readonly functionsService: FunctionsService) {}

  @Post('/')
  create(@Body() body) {
    return this.functionsService.create(body);
  }

  @Get('/')
  findAll() {
    return this.functionsService.findAll();
  }

  @Get('/forElement/:elementId')
  findAllByElementId(@Param('elementId') elementId: string) {
    return this.functionsService.findAllByElementId(elementId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.functionsService.findOne(+id);
  }

  @Put()
  update(@Body() body) {
    return this.functionsService.update(body);
  }

  @Delete('/all')
  removeAll() {
    return this.functionsService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.functionsService.remove(+id);
  }

  @Delete()
  removeAllFromElement(@Param('elementId') elementId: string) {
    return this.functionsService.removeAllFromElement(elementId);
  }
}
