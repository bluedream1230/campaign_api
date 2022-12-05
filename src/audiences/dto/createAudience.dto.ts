import { ApiProperty } from "@nestjs/swagger";

export default class CreateAudienceDto {
  @ApiProperty()
  public name: string;
}
