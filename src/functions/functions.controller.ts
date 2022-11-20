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

  @Get('/forComponent/:componentName')
  findAllForComponent(@Param() params: any) {
    return this.functionsService.findAllForComponent(params.componentName);
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
  async remove(@Param('id') id: string) {
    return await this.functionsService.remove(id);
  }

  @Delete()
  removeAllFromElement(@Param('elementId') elementId: string) {
    return this.functionsService.removeAllFromElement(elementId);
  }
}
