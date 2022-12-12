import { JwtService } from "@nestjs/jwt";
import LoginUserDto from "src/users/dto/loginUser.dto";
import { UsersService } from "src/users/users.service";
import { Repository } from "typeorm";
import Event from "src/events/event.entity";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private eventsRepository;
    constructor(usersService: UsersService, jwtService: JwtService, eventsRepository: Repository<Event>);
    validateUser(email: string): Promise<any>;
    login(_user: LoginUserDto): Promise<"The password you entered is incorrect!" | {
        access_token: string;
        email: string;
        user: string;
    }>;
    getEventByIdWithoutSignin(id: number): Promise<Event>;
}
