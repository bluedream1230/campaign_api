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
export default class UpdateUserDto {
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
  public name: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public logo: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber("us")
  public phone: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public subscription: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  public coins: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  public coinsused: number;
}
