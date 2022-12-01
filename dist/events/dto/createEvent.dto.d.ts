export default class CreateEventDto {
    name: string;
    location: string;
    start_time: Date;
    end_time: Date;
    user_limit: number;
    qr_code: string;
    event_coins: number;
}
