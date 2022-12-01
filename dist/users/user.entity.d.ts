import Address from "./address.entity";
import Event from "src/events/event.entity";
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
    address: Address;
    events: Event[];
}
export default User;
