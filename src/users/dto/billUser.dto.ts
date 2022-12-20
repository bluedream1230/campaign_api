import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export default class BillUserDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public firstname: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public lastname: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber(null)
  phone: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  billingaddress: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  ccn: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  CVV: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsDate()
  expirationdate: Date;
}
