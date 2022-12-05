import { UsersService } from "./users.service";
import AddressUserDto from "./dto/addressUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdateUserDto from "./dto/updateUser.dto";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    update(req: any, updateUser: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatedAddress({ id }: FindOneParams, addressData: AddressUserDto): Promise<AddressUserDto>;
    joinEvent(req: any, { id }: FindOneParams, joinedEvent: CreateAttendDto): Promise<void>;
    updateAudience(req: any, { id }: FindOneParams): Promise<void>;
}
