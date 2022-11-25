import { AuthService } from "../auth/auth.service";
import { UsersService } from "../users/users.service";
import LoginUserDto from "../users/dto/loginUser.dto";
import CreateUserDto from "../users/dto/createUser.dto";
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(loginData: LoginUserDto): Promise<{
        access_token: string;
        email: string;
        user: string;
    }>;
    register(registrationData: CreateUserDto): Promise<import("../users/user.entity").default>;
}
