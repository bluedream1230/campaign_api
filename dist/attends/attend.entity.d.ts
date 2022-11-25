import User from "src/users/user.entity";
import Event from "src/events/event.entity";
declare class Attend {
    id: number;
    event: Event;
    user: User;
}
export default Attend;
