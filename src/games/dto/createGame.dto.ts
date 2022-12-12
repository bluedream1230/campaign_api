import { ApiProperty } from "@nestjs/swagger";

export default class CreateGameDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public type: string;

  @ApiProperty()
  public video_url: string;

  @ApiProperty()
  public img_url: string;
}
