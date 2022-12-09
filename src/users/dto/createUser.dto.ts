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
  lastname: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  phone: string;

  // @ApiProperty()
  // phone: string;

  // @ApiProperty()
  // subscription: string;

  // @ApiProperty()
  // coins: number;

  // @ApiProperty()
  // coinsused: number;

  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // public street: string;

  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // public suite: string;

  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // public city: string;

  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // public state: string;

  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // public zip: string;
}
