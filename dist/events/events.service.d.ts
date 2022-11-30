import { Repository } from "typeorm";
import Event from "./event.entity";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import User from "src/users/user.entity";
export default class EventsService {
    private eventsRepository;
    constructor(eventsRepository: Repository<Event>);
    getAllEvents(user: User): Promise<Event[]>;
    getEventById(id: number): Promise<Event>;
    createEvent(id: number, event: CreateEventDto, user: User): Promise<Event>;
    updateEvent(id: number, event: UpdateEventDto): Promise<void>;
    deleteEvent(id: number): Promise<void>;
}
