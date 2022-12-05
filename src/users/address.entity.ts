import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Address {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public street: string;

  @Column()
  public suite: string;

  @Column()
  public city: string;

  @Column()
  public state: string;

  @Column()
  public zip: string;
  @ApiProperty()
  @CreateDateColumn({
    type: "timestamp", // timestamptz
    default: () => "NOW()", // "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "NOW()",
    onUpdate: "NOW()",
  })
  updatedAt: Date;
}

export default Address;
