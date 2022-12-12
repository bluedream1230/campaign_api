import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Event from "./event.entity";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventNotFoundException from "./exceptions/eventNotFound.exception";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
import Game from "src/games/game.entity";
@Injectable()
export default class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(Attend)
    private attendsRepository: Repository<Attend>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>
  ) {}

  async getAllEvents(user: User) {
    const events = await this.eventsRepository
      .createQueryBuilder("event")
      .where(`event.userId = '${user.id}'`)
      .getMany();
    const totalList = [];
    await Promise.all(
      events.map(async (item, index) => {
        // item.id;
        const users_num = await this.attendsRepository
          .createQueryBuilder()
          .where(`attend.event_id = '${item.id}'`)
          .getCount();
        console.log("users_ number : ", users_num);
        const event = await this.eventsRepository
          .createQueryBuilder("event")
          .leftJoinAndSelect("event.game", "game")
          .where(`event.id = '${item.id}'`)
          .getMany();
        totalList.push({ ...(event[0] || {}), users_num });
      })
    );
    return totalList;
  }

  async getEventById(id: number) {
    const event = await this.eventsRepository.findOne(id);
    if (event) {
      return event;
    }

    throw new EventNotFoundException(id);
  }

  async createEvent(
    gameId: number,
    rewardId: number,
    audienceId: number,
    event: CreateEventDto,
    user: User
  ) {
    const newEvent = await this.eventsRepository.create({
      ...event,
      user: user,
      game: {
        id: gameId,
      },
      reward: {
        id: rewardId,
      },
      audience: {
        id: audienceId,
      },
    });
    console.log(newEvent);
    const result = await this.eventsRepository.save(newEvent);

    return result;
  }

  async updateEvent(id: number, event: UpdateEventDto) {
    await this.eventsRepository.update(id, event);
    throw new EventNotFoundException(id);
  }

  async deleteEvent(id: number) {
    const deleteResponse = await this.eventsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new EventNotFoundException(id);
    }
  }
}
