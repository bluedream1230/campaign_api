import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class FindRewardpoolParam {
  @ApiProperty()
  @IsNumberString()
  rewardpool: string;
}
