import Game from "src/games/game.entity";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
declare class Event {
    id: number;
    name: string;
    location: string;
    start_time: string;
    end_time: string;
    user_limit: string;
    qr_code: string;
    game: Game;
    user: User;
    attends: Attend[];
}
export default Event;
