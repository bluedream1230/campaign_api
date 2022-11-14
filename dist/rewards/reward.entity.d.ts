import Event from "src/events/event.entity";
declare class Reward {
    id: number;
    name: string;
    type: string;
    category: string;
    image_url: string;
    description: string;
    coinvalue: string;
    ratelimit: string;
    timelimit: string;
    address: Event;
}
export default Reward;
