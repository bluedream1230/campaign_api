import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class FindRewardParams {
  @ApiProperty()
  @IsNumberString()
  rewardId: string;
}
