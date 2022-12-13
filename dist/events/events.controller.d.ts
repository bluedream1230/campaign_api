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
    getEventById({ id }: FindOneParams): Promise<{
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
        game: import("../games/game.entity").default;
        user: import("../users/user.entity").default;
        reward: import("../rewards/reward.entity").default;
        audience: import("../audiences/audiences.entity").default;
    }>;
    createEvent({ gameId }: FindGameParams, { rewardId }: FindRewardParams, { audienceId }: FindAudienceParams, event: CreateEventDto, req: RequestWithUser): Promise<CreateEventDto>;
    updateEvent({ id }: FindOneParams, event: UpdateEventDto): Promise<void>;
    deleteEvent({ id }: FindOneParams): Promise<void>;
}
