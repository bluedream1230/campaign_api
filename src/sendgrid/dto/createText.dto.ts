import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class CreateTextDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  sender: string;
}
