import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class CreateUserDto {
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
  name: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  // @ApiProperty()
  // logo: string;

  // @ApiProperty()
  // phone: string;

  // @ApiProperty()
  // subscription: string;

  // @ApiProperty()
  // coins: number;

  // @ApiProperty()
  // coinsused: number;
}
