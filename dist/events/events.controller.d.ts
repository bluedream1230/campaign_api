import FindOneParams from "src/utils/findOneParams";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventsService from "./events.service";
import RequestWithUser from "src/auth/interface/requestWithUser";
export default class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    getAllEvents(): Promise<import("./event.entity").default[]>;
    getEventById({ id }: FindOneParams): Promise<import("./event.entity").default>;
    createEvent({ id }: FindOneParams, event: CreateEventDto, req: RequestWithUser): Promise<CreateEventDto>;
    updateEvent({ id }: FindOneParams, event: UpdateEventDto): Promise<void>;
    deleteEvent({ id }: FindOneParams): Promise<void>;
}
