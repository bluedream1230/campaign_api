import { ApiProperty } from "@nestjs/swagger";
import {
  IsDefined,
  isEAN,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from "class-validator";
export default class UpdatePassDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  public email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public password: string;
}
