import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export default class JoinEventDto {
  @ApiProperty()
  public join_event_id: number;
}
