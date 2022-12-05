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
    getEventById(id: number): Promise<Event>;
    createEvent(gameId: number, rewardId: number, audienceId: number, event: CreateEventDto, user: User): Promise<Event>;
    updateEvent(id: number, event: UpdateEventDto): Promise<void>;
    deleteEvent(id: number): Promise<void>;
}
