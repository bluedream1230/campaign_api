import { Repository } from "typeorm";
import User from "./user.entity";
import Address from "./address.entity";
import CreateUserDto from "./dto/createUser.dto";
import AddressUserDto from "./dto/addressUser.dto";
import UpdateUserDto from "./dto/updateUser.dto";
export declare class UsersService {
    private usersRepository;
    private usersAddressRepository;
    constructor(usersRepository: Repository<User>, usersAddressRepository: Repository<Address>);
    getByEmail(email: string): Promise<User>;
    getById(id: number): Promise<User>;
    create(userData: CreateUserDto): Promise<User>;
    update(id: number, userData: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updateAddress(id: number, address: AddressUserDto): Promise<void>;
}
