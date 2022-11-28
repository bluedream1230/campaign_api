import { ApiProperty } from "@nestjs/swagger";

export default class UpdateRewardDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public type: string;

  @ApiProperty()
  public category: string;

  @ApiProperty()
  public image_url: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public coinvalue: number;

  @ApiProperty()
  public ratelimit: number;

  @ApiProperty()
  public timelimit: number;
}
