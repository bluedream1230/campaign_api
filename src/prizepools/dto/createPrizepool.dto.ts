import { ApiProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn } from "typeorm";

export default class CreatePrizePoolDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public prizepool: string;
}
