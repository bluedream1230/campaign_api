import { JwtService } from "@nestjs/jwt";
import LoginUserDto from "src/users/dto/loginUser.dto";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string): Promise<any>;
    login(_user: LoginUserDto): Promise<{
        access_token: string;
        email: string;
        user: string;
    }>;
}
