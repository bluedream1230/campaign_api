import { Repository } from "typeorm";
import User from "./user.entity";
import Bill from "./bill.entity";
import CreateUserDto from "./dto/createUser.dto";
import BillUserDto from "./dto/billUser.dto";
import UpdateUserDto from "./dto/updateUser.dto";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
import Attend from "src/attends/attend.entity";
import Audience from "src/audiences/audiences.entity";
import UpdatePassDto from "./dto/updatePass.dto";
export declare class UsersService {
    private usersRepository;
    private usersBillRepository;
    private attendsRepository;
    private audiencesRepository;
    constructor(usersRepository: Repository<User>, usersBillRepository: Repository<Bill>, attendsRepository: Repository<Attend>, audiencesRepository: Repository<Audience>);
    getByEmail(email: string): Promise<User>;
    getById(id: number): Promise<User>;
    create(userData: CreateUserDto): Promise<User>;
    update(id: number, userData: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updateBill(id: number, bill: BillUserDto): Promise<void>;
    updateAudience(id: number, user_id: number): Promise<void>;
    joinEvent(user_id: number, id: number, joinEvent: CreateAttendDto): Promise<void>;
    updatePassword(password: UpdatePassDto): Promise<import("typeorm").UpdateResult>;
}
