import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
class Redemption {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public user_id: number;

  @ApiProperty()
  @Column()
  public reward_id: number;

  @ApiProperty()
  @CreateDateColumn({
    type: "timestamptz", // timestamp timestamptz
    default: () => "CURRENT_TIMESTAMP(6)", // "CURRENT_TIMESTAMP(6)","NOW()"
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}

export default Redemption;
