import { ApiProperty } from "@nestjs/swagger";

export default class UpdateUserDto {
  @ApiProperty()
  public email: string;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public logo: string;

  @ApiProperty()
  public phone: string;

  @ApiProperty()
  public subscription: string;

  @ApiProperty()
  public password: string;

  @ApiProperty()
  public coins: number;

  @ApiProperty()
  public coinsused: number;
}
