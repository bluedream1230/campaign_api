import Event from "src/events/event.entity";
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
    events: Event[];
}
export default Reward;
