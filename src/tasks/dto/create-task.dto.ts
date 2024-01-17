import { 
  MinLength, 
  IsString, 
  IsOptional 
} from "class-validator";

export class CreateTaskDto {

  @IsString()
  @MinLength(1)
  description: string;

  @IsString()
  category: string;

  @IsOptional()
  active?: boolean;
  
  @IsOptional()
  archived?: boolean;

}
