import { Repository } from "typeorm";
import Event from "./event.entity";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
import Game from "src/games/game.entity";
export default class EventsService {
    private eventsRepository;
    private attendsRepository;
    private gamesRepository;
    constructor(eventsRepository: Repository<Event>, attendsRepository: Repository<Attend>, gamesRepository: Repository<Game>);
    getAllEvents(user: User): Promise<any[]>;
    getEventById(id: number): Promise<{
        qr_code: any;
        id: number;
        name: string;
        location: string;
        start_time: Date;
        end_time: Date;
        user_limit: number;
        event_coins: number;
        duration: number;
        createdAt: Date;
        updatedAt: Date;
        game: Game;
        user: User;
        reward: import("../rewards/reward.entity").default;
        audience: import("../audiences/audiences.entity").default;
    }>;
    createEvent(gameId: number, rewardId: number, audienceId: number, event: CreateEventDto, user: User): Promise<Event>;
    updateEvent(id: number, event: UpdateEventDto): Promise<void>;
    deleteEvent(id: number): Promise<void>;
}
