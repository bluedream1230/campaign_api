import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class FindAudienceParams {
  @ApiProperty()
  @IsNumberString()
  audienceId: string;
}
