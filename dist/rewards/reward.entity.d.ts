import Event from "src/events/event.entity";
import User from "src/users/user.entity";
declare class Reward {
    id: number;
    name: string;
    type: string;
    category: string;
    image_url: string;
    description: string;
    coinvalue: number;
    ratelimit: number;
    timelimit: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    events: Event[];
}
export default Reward;
