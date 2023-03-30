import { ApiProperty } from "@nestjs/swagger";

export default class CreateRedemptionDto {
  @ApiProperty()
  public user_id: number;

  @ApiProperty()
  public reward_id: number;
}
