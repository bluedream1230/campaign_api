import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  subscription: string;

  @ApiProperty()
  coins: number;

  @ApiProperty()
  coinsused: number;
}
