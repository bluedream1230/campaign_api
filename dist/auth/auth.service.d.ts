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
    getEventByIdWithoutSignin(id: number): Promise<{
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
}
