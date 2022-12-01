import Game from "src/games/game.entity";
import User from "src/users/user.entity";
import Reward from "src/rewards/reward.entity";
declare class Event {
    id: number;
    name: string;
    location: string;
    start_time: Date;
    end_time: Date;
    user_limit: number;
    qr_code: string;
    event_coins: number;
    game: Game;
    user: User;
    reward: Reward;
}
export default Event;
