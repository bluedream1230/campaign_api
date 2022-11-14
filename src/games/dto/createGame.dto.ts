import { ApiProperty } from "@nestjs/swagger";

export default class CreateGameDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public type: string;

  @ApiProperty()
  public duration: string;

  @ApiProperty()
  public video_url: string;
}
