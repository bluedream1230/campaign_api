import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "./user.entity";
import Bill from "./bill.entity";
import CreateUserDto from "./dto/createUser.dto";
import BillUserDto from "./dto/billUser.dto";
import UpdateUserDto from "./dto/updateUser.dto";
import JoinEventDto from "./dto/joinEvent.dto";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
import Attend from "src/attends/attend.entity";
import CreateAudienceDto from "src/audiences/dto/createAudience.dto";
import Audience from "src/audiences/audiences.entity";
import UpdatePassDto from "./dto/updatePass.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Bill)
    private usersBillRepository: Repository<Bill>,
    @InjectRepository(Attend)
    private attendsRepository: Repository<Attend>,
    @InjectRepository(Audience)
    private audiencesRepository: Repository<Audience>
  ) {}

  async getByEmail(email: string) {
    console.log(111, email);
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      "User with this email does not exist",
      HttpStatus.NOT_FOUND
    );
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
      "User with this id does not exist",
      HttpStatus.NOT_FOUND
    );
  }

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async update(id: number, userData: UpdateUserDto) {
    return await this.usersRepository.update(id, userData);
  }

  async updateBill(id: number, bill: BillUserDto) {
    const user = await this.usersRepository.findOne({
      relations: ["bill"],
      where: { id },
    });

    if (!user) return;
    if (user.bill) await this.usersBillRepository.update(user.bill.id, bill);
    else {
      const result = await this.usersBillRepository.insert(bill);
      const billId = result.identifiers[0].id;
      await this.usersRepository.update(id, { bill: { id: billId } });
    }
  }

  async updateAudience(id: number, user_id: number) {
    const user = await this.usersRepository.update(user_id, {
      audience: { id: id },
    });
    console.log(id, user_id);
  }

  async joinEvent(user_id: number, id: number, joinEvent: CreateAttendDto) {
    joinEvent.user_id = user_id;
    joinEvent.event_id = id;
    await this.attendsRepository.insert(joinEvent);
  }

  async updatePassword(password: UpdatePassDto) {
    const user = await this.usersRepository
      .createQueryBuilder("user")
      .where(`user.email = '${password.email}'`)
      .getOne();
    if (!user) return;
    return this.usersRepository.update(
      { email: password.email },
      {
        password: password.password,
      }
    );
  }
}
