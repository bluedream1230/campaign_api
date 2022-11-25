import { UsersService } from "./users.service";
import AddressUserDto from "./dto/addressUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdateUserDto from "./dto/updateUser.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    update(req: any, updateUser: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatedAddress({ id }: FindOneParams, addressData: AddressUserDto): Promise<AddressUserDto>;
}
