import { ApiProperty } from "@nestjs/swagger";

export default class AddressUserDto {
  @ApiProperty()
  public street: string;

  @ApiProperty()
  public suite: string;

  @ApiProperty()
  public city: string;

  @ApiProperty()
  public state: string;

  @ApiProperty()
  public zip: string;
}
