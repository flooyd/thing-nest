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

  @Get(':elementId')
  async findAllForElement(@Param('elementId') elementId: string) {
    await this.functionVarsService.findAllForElement(elementId);
  }

  @Get(':functionId')
  async findAllForFunction(@Param('functionId') functionId: string) {
    await this.functionVarsService.findOne(functionId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    await this.functionVarsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    await this.functionVarsService.update(id, body);
  }

  @Delete(':elementId')
  async removeAllForElement(@Param('elementId') elementId: string) {
    await this.functionVarsService.removeAllForElement(elementId);
  }

  async removeAllForFunction(@Param('functionId') functionId: string) {
    await this.functionVarsService.removeAllForFunction(functionId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.functionVarsService.remove(+id);
  }
}
