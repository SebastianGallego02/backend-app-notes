import { IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateCategoryDto {

  @IsString()
  name: string;
}
