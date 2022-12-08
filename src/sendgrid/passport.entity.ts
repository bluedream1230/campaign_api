// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   OneToOne,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from "typeorm";

// import User from "src/users/user.entity";

// @Entity()
// export class Passport {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @OneToOne(() => User, (user) => user.id)
//   @JoinColumn()
//   user: User;

//   @Column()
//   selector: string;

//   @Column()
//   token: string;

//   @Column({ type: "json", default: {} })
//   data: object;

//   @CreateDateColumn({
//     type: "timestamptz",
//     default: () => "CURRENT_TIMESTAMP(6)",
//   })
//   createdAt: Date;

//   @UpdateDateColumn({
//     type: "timestamptz",
//     default: () => "CURRENT_TIMESTAMP(6)",
//     onUpdate: "CURRENT_TIMESTAMP(6)",
//   })
//   updatedAt: Date;

//   @Column({ default: false })
//   isActive: boolean;
// }
