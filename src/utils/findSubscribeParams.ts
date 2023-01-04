import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class FindSubscribeParam {
  @ApiProperty()
  @IsNumberString()
  subscribeId: string;
}
