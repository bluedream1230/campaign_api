import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import User from "src/users/user.entity";
import Event from "src/events/event.entity";

@Entity()
@Index(["user_id", "event_id"], { unique: true })
class Attend {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public user_id: number;

  @ApiProperty()
  @Column()
  public event_id: number;

  @ApiProperty()
  @Column({ default: 0 })
  public score: number;

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

  // @ManyToOne(() => Event, (event) => event.attends)
  // public event: Event;

  // @ManyToOne(() => User, (user) => user.attends)
  // public user: User;
}

export default Attend;
