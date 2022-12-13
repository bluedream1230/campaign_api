import { AuthService } from "../auth/auth.service";
import { UsersService } from "../users/users.service";
import LoginUserDto from "../users/dto/loginUser.dto";
import CreateUserDto from "../users/dto/createUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdatePassDto from "src/users/dto/updatePass.dto";
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(loginData: LoginUserDto): Promise<"The password you entered is incorrect!" | {
        access_token: string;
        email: string;
        user: string;
    }>;
    register(registrationData: CreateUserDto): Promise<import("../users/user.entity").default>;
    getUserById({ id }: FindOneParams): Promise<import("../users/user.entity").default>;
    updatepass(registrationData: UpdatePassDto): Promise<import("typeorm").UpdateResult>;
    getallevents({ id }: FindOneParams): Promise<{
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
