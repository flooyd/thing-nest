import { Injectable } from '@nestjs/common';
import { CreateMimicDto } from './dto/create-mimic.dto';
import { UpdateMimicDto } from './dto/update-mimic.dto';

@Injectable()
export class MimicsService {
  create(createMimicDto: CreateMimicDto) {
    return 'This action adds a new mimic';
  }

  findAll() {
    return `This action returns all mimics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mimic`;
  }

  update(id: number, updateMimicDto: UpdateMimicDto) {
    return `This action updates a #${id} mimic`;
  }

  remove(id: number) {
    return `This action removes a #${id} mimic`;
  }
}
