import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./address.entity";
import Event from "src/events/event.entity";
import Attend from "src/attends/attend.entity";
import { IsPhoneNumber } from "class-validator";

@Entity("user")
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column({ default: "logo" })
  public logo?: string;

  @Column({ default: "+1 222 222 2222" })
  public phone?: string;

  @Column({ default: "subscription" })
  public subscription?: string;

  @Column()
  //@Exclude()
  public password: string;

  @Column({ default: 0 })
  public coins?: number;

  @Column({ default: 0 })
  public coinsused?: number;

  // @Column({ default: 0 })
  // public join_event_id?: number;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Event, (event) => event.user)
  public events: Event[];

  // @OneToMany(() => Attend, (attend) => attend.user)
  // public attends: Attend[];
}

export default User;
