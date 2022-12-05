import { Repository } from "typeorm";
import User from "./user.entity";
import Address from "./address.entity";
import CreateUserDto from "./dto/createUser.dto";
import AddressUserDto from "./dto/addressUser.dto";
import UpdateUserDto from "./dto/updateUser.dto";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
import Attend from "src/attends/attend.entity";
import Audience from "src/audiences/audiences.entity";
export declare class UsersService {
    private usersRepository;
    private usersAddressRepository;
    private attendsRepository;
    private audiencesRepository;
    constructor(usersRepository: Repository<User>, usersAddressRepository: Repository<Address>, attendsRepository: Repository<Attend>, audiencesRepository: Repository<Audience>);
    getByEmail(email: string): Promise<User>;
    getById(id: number): Promise<User>;
    create(userData: CreateUserDto): Promise<User>;
    update(id: number, userData: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updateAddress(id: number, address: AddressUserDto): Promise<void>;
    updateAudience(id: number, user_id: number): Promise<void>;
    joinEvent(user_id: number, id: number, joinEvent: CreateAttendDto): Promise<void>;
}
