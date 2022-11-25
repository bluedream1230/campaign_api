import Address from "./address.entity";
import Event from "src/events/event.entity";
import Attend from "src/attends/attend.entity";
declare class User {
    id: number;
    email: string;
    name: string;
    logo: string;
    phone: string;
    subscription: string;
    password: string;
    coins: number;
    coinsused: number;
    address: Address;
    events: Event[];
    attends: Attend[];
}
export default User;
