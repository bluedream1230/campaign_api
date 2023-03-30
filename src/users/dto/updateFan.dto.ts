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
export default class UpdateFanDto {
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
  public logo: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber(null)
  public phone: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public shipping: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  public birth: Date;
}
