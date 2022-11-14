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

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public logo: string;

  @Column()
  public phone: string;

  @Column()
  public subscription: string;

  @Column()
  //@Exclude()
  public password: string;

  @Column()
  public coins: number;

  @Column()
  public coinsused: number;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Event, (event) => event.user)
  public events: Event[];

  @OneToMany(() => Attend, (attend) => attend.user)
  public attends: Attend[];
}

export default User;
