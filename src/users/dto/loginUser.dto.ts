import { ApiProperty } from "@nestjs/swagger";

export default class LoginUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
