import Game from "src/games/game.entity";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
import Reward from "src/rewards/reward.entity";
declare class Event {
    id: number;
    name: string;
    location: string;
    start_time: string;
    end_time: string;
    user_limit: string;
    qr_code: string;
    event_coins: number;
    game: Game;
    user: User;
    attends: Attend[];
    reward: Reward;
}
export default Event;
