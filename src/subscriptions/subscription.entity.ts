import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("subscription")
class Subscription {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public price: number;

  @ApiProperty()
  @Column()
  public coins: number;

  @ApiProperty()
  @Column()
  public user_limit: number;

  @ApiProperty()
  @Column({ nullable: true })
  public price_id: string;
}

export default Subscription;
