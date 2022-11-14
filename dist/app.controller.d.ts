import { AuthService } from "./auth/auth.service";
import LoginUserDto from "./users/dto/loginUser.dto";
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: LoginUserDto): Promise<{
        access_token: string;
        email: string;
        user: string;
    }>;
    getProfile(req: any): any;
}
