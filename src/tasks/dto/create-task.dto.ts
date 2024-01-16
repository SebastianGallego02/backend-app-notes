import { 
  MinLength, 
  IsInt, 
  IsPositive, 
  IsString, 
  IsOptional 
} from "class-validator";

export class CreateTaskDto {

  @IsString()
  @MinLength(1)
  description: string;

  @IsInt()
  @IsPositive()
  category: number;
  @IsOptional()
  active?: boolean;
  @IsOptional()
  archived?: boolean;

}
