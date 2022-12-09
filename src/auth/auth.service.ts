import { Injectable } from "@nestjs/common";
import { AdminUsersService } from "../adminUsers/admin.users.service";
import { JwtService } from "@nestjs/jwt";
import CreateUserDto from "src/users/dto/createUser.dto";
import LoginUserDto from "src/users/dto/loginUser.dto";
import { UsersService } from "src/users/users.service";
import EventsService from "src/events/events.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Event from "src/events/event.entity";
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>
  ) {}

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(_user: LoginUserDto) {
    const user = await this.usersService.getByEmail(_user.email);
    if (!user || user.password != _user.password)
      return "The password you entered is incorrect!";

    const { password, ...payload } = user;

    return {
      access_token: this.jwtService.sign(payload),
      email: payload.email,
      user: payload.name,
    };
  }

  async getAllEventsWithoutSignin() {
    const events = await this.eventsRepository.find();
    return events;
  }
}
