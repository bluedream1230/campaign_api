import { UsersService } from "./users.service";
import BillUserDto from "./dto/billUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdateUserDto from "./dto/updateUser.dto";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    update(req: any, updateUser: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatedBill(req: any, billData: BillUserDto): Promise<BillUserDto>;
    joinEvent(req: any, { id }: FindOneParams, joinedEvent: CreateAttendDto): Promise<void>;
    updateAudience(req: any, { id }: FindOneParams): Promise<void>;
}
