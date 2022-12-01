import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class FindGameParams {
  @ApiProperty()
  @IsNumberString()
  gameId: string;
}
