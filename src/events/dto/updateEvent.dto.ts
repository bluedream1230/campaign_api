import { ApiProperty } from "@nestjs/swagger";

export default class UpdateEventDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public location: string;

  @ApiProperty()
  public start_time: string;

  @ApiProperty()
  public end_time: string;

  @ApiProperty()
  public user_limit: string;

  @ApiProperty()
  public qr_code: string;
}
