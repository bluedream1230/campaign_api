import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import User from "src/users/user.entity";
import Event from "src/events/event.entity";

@Entity()
class Attend {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Event, (event) => event.attends)
  public event: Event;

  @ManyToOne(() => User, (user) => user.attends)
  public user: User;
}

export default Attend;
