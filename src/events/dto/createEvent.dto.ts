import { ApiProperty } from "@nestjs/swagger";

export default class CreateEventDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public location: string;

  @ApiProperty()
  public type: string;

  @ApiProperty()
  public sponsorname: string;

  @ApiProperty()
  public start_time: Date;

  @ApiProperty()
  public end_time: Date;

  @ApiProperty()
  public qr_code: string;

  @ApiProperty()
  public sponsor_video_url: string;

  @ApiProperty()
  public sponsor_logo: string;

  @ApiProperty()
  public duration: number;

  @ApiProperty()
  public trivia_id: number;

  @ApiProperty()
  public trivia_url: string;
}
