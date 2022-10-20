import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FunctionVarsService } from './function-vars.service';

@Controller('function-vars')
export class FunctionVarsController {
  constructor(private readonly functionVarsService: FunctionVarsService) {}

  @Post()
  async create(@Body() body) {
    await this.functionVarsService.create(body);
  }

  @Get()
  async findAll() {
    await this.functionVarsService.findAll();
  }

  @Get('/forElement/:elementId')
  async findAllForElement(@Param('elementId') elementId: string) {
    await this.functionVarsService.findAllForElement(elementId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    await this.functionVarsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    await this.functionVarsService.update(id, body);
  }

  @Delete('/forElement/:elementId')
  async removeAllForElement(@Param('elementId') elementId: string) {
    await this.functionVarsService.removeAllForElement(elementId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.functionVarsService.remove(+id);
  }

  @Delete()
  async removeAll() {
    await this.functionVarsService.removeAll();
  }
}
