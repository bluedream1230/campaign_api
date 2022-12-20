import { ApiProperty } from "@nestjs/swagger";

export default class CreateEventDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public location: string;

  @ApiProperty()
  public sponsorname: string;

  @ApiProperty()
  public start_time: Date;

  @ApiProperty()
  public end_time: Date;

  @ApiProperty()
  public qr_code: string;

  @ApiProperty()
  public event_coins: number;

  @ApiProperty()
  public rewardpool: number;

  @ApiProperty()
  public duration: number;

  @ApiProperty()
  public trivia_id: number;

  @ApiProperty()
  public trivia_url: string;
}
