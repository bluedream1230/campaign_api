import { Repository } from "typeorm";
import Event from "./event.entity";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
export default class EventsService {
    private eventsRepository;
    constructor(eventsRepository: Repository<Event>);
    getAllEvents(): Promise<Event[]>;
    getEventById(id: number): Promise<Event>;
    createEvent(event: CreateEventDto): Promise<Event>;
    updateEvent(id: number, event: UpdateEventDto): Promise<void>;
    deleteEvent(id: number): Promise<void>;
}
