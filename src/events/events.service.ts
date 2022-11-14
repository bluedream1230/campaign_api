import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Event from "./event.entity";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventNotFoundException from "./exceptions/eventNotFound.exception";
@Injectable()
export default class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>
  ) {}

  getAllEvents() {
    return this.eventsRepository.find();
  }

  async getEventById(id: number) {
    const event = await this.eventsRepository.findOne(id);
    if (event) {
      return event;
    }

    throw new EventNotFoundException(id);
  }

  async createEvent(event: CreateEventDto) {
    const newEvent = await this.eventsRepository.create(event);
    await this.eventsRepository.save(newEvent);
    return newEvent;
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
