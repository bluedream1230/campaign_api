import RequestWithUser from "src/auth/interface/requestWithUser";
import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";
export declare class FansController {
    private readonly apisService;
    constructor(apisService: ApisService);
    getUsers(req: RequestWithUser): Promise<any[]>;
    getUsersByEventId({ id }: FindOneParams): Promise<{
        totalData: any[];
        event: import("../events/event.entity").default[];
        user_num: number;
        win_num: number;
    }>;
}
