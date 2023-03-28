import { ApiProperty } from "@nestjs/swagger";

export default class CreateAttendDto {
  @ApiProperty()
  public user_id: number;

  @ApiProperty()
  public event_id: number;

  @ApiProperty()
  public score: number;
}
