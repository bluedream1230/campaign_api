import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class AddressUserDto {
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
