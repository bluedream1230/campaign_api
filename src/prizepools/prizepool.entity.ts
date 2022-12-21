import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";

@Entity("prizepool")
class Prizepool {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public place: number;

  @ApiProperty()
  @Column()
  public coin: number;

  @OneToMany(() => User, (user) => user.audience)
  public users: User[];
}

export default Prizepool;
