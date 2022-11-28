import Event from "src/events/event.entity";
declare class Game {
    id: number;
    name: string;
    type: string;
    duration: string;
    video_url: string;
    events: Event[];
}
export default Game;