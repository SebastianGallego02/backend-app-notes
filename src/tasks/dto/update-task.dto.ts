import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';

export class UpdateTaskDto {

  @MinLength(1)
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category: Category;

  @IsOptional()
  active?: boolean;

  @IsOptional()
  archived?: boolean;

  
}

