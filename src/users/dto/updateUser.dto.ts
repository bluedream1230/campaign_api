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
  public lastname: string;

  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // public logo: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber(null)
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
  public street: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public suite: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public city: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public state: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public zip: string;
}
