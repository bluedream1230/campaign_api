import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import User from "src/users/user.entity";
import Event from "src/events/event.entity";

@Entity()
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

  // @ManyToOne(() => Event, (event) => event.attends)
  // public event: Event;

  // @ManyToOne(() => User, (user) => user.attends)
  // public user: User;
}

export default Attend;
