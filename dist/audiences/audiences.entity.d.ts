import User from "src/users/user.entity";
declare class Audience {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
}
export default Audience;
