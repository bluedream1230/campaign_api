import FindOneParams from "src/utils/findOneParams";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventsService from "./events.service";
import RequestWithUser from "src/auth/interface/requestWithUser";
import FindGameParams from "src/utils/findGameParams";
import FindRewardParams from "src/utils/findRewardParams";
import FindAudienceParams from "src/utils/findAudienceParams";
export default class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    getAllEvents(req: RequestWithUser): Promise<any[]>;
    getEventById({ id }: FindOneParams): Promise<import("./event.entity").default>;
    createEvent({ gameId }: FindGameParams, { rewardId }: FindRewardParams, { audienceId }: FindAudienceParams, event: CreateEventDto, req: RequestWithUser): Promise<CreateEventDto>;
    updateEvent({ id }: FindOneParams, event: UpdateEventDto): Promise<void>;
    deleteEvent({ id }: FindOneParams): Promise<void>;
}
