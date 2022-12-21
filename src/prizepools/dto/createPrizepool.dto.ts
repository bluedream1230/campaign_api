import { ApiProperty } from "@nestjs/swagger";

export default class CreatePrizePoolDto {
  @ApiProperty()
  public place: number;

  @ApiProperty()
  public coin: number;
}
