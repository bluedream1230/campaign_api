import { ApiProperty } from "@nestjs/swagger";

export default class CreateSubscriptionDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public price: number;

  @ApiProperty()
  public coins: number;

  @ApiProperty()
  public user_limit: number;
}
