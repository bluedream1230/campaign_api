import Address from "./address.entity";
import Event from "src/events/event.entity";
import Reward from "src/rewards/reward.entity";
import Audience from "src/audiences/audiences.entity";
declare class User {
    id: number;
    email: string;
    name: string;
    logo?: string;
    phone?: string;
    subscription?: string;
    password: string;
    coins?: number;
    coinsused?: number;
    completion: number;
    createdAt: Date;
    updatedAt: Date;
    address: Address;
    events: Event[];
    rewards: Reward[];
    audience: Audience;
}
export default User;
