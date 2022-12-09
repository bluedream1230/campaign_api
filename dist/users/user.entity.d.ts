import Bill from "./bill.entity";
import Event from "src/events/event.entity";
import Reward from "src/rewards/reward.entity";
import Audience from "src/audiences/audiences.entity";
declare class User {
    id: number;
    email: string;
    name: string;
    logo?: string;
    phone?: string;
    street?: string;
    suite?: string;
    city: string;
    state: string;
    zip: string;
    subscription?: string;
    password: string;
    coins?: number;
    coinsused?: number;
    completion: number;
    createdAt: Date;
    updatedAt: Date;
    bill: Bill;
    events: Event[];
    rewards: Reward[];
    audience: Audience;
}
export default User;
