import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";
export declare class EventsController {
    private readonly apisService;
    constructor(apisService: ApisService);
    getEventById({ id }: FindOneParams): Promise<{
        user: import("../users/user.entity").default;
        event: import("../events/event.entity").default;
    }>;
}
