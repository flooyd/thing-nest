import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MimicsService } from './mimics.service';
import { CreateMimicDto } from './dto/create-mimic.dto';
import { UpdateMimicDto } from './dto/update-mimic.dto';

@Controller('mimics')
export class MimicsController {
  constructor(private readonly mimicsService: MimicsService) {}

  @Post()
  create(@Body() createMimicDto: CreateMimicDto) {
    return this.mimicsService.create(createMimicDto);
  }

  @Get()
  findAll() {
    return this.mimicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mimicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMimicDto: UpdateMimicDto) {
    return this.mimicsService.update(+id, updateMimicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mimicsService.remove(+id);
  }
}
