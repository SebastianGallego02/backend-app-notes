import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsInt, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  description?: string;
  @IsInt()
  @IsPositive()
  @IsOptional()
  category?: number;
  @IsOptional()
  active?: boolean;
  @IsOptional()
  archived?: boolean;

}
