import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Address;
