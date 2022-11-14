import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "./user.entity";
import Address from "./address.entity";
import CreateUserDto from "./dto/createUser.dto";
import AddressUserDto from "./dto/addressUser.dto";
import UpdateUserDto from "./dto/updateUser.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Address)
    private usersAddressRepository: Repository<Address>
  ) {}

  async getByEmail(email: string) {
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

  async updateAddress(id: number, address: AddressUserDto) {
    const user = await this.usersRepository.findOne({
      relations: ["address"],
      where: { id },
    });

    if (!user) return;
    if (user.address)
      await this.usersAddressRepository.update(user.address.id, address);
    else {
      const result = await this.usersAddressRepository.insert(address);
      const addressId = result.identifiers[0].id;
      await this.usersRepository.update(id, { address: { id: addressId } });
    }
  }
}
