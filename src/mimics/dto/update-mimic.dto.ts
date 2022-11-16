import { PartialType } from '@nestjs/mapped-types';
import { CreateMimicDto } from './create-mimic.dto';

export class UpdateMimicDto extends PartialType(CreateMimicDto) {}
