import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class FindEventParams {
  @ApiProperty()
  @IsNumberString()
  eventId: string;
}
