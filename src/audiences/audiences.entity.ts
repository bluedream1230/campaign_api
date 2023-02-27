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

@Entity("audience")
@Index(["name"], { unique: true })
class Audience {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

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

  // @OneToOne(() => Event, {
  //   eager: true,
  //   cascade: true,
  // })
  // @JoinColumn()
  // public event: Event;

  @OneToMany(() => User, (user) => user.audience)
  public users: User[];
}

export default Audience;
