import { IEventItem, IShipmentState } from './interfaces';

export class Gui {
    private stack: IEventItem[] = [];

    public on(eventType: string, callback: (state: IShipmentState) => void): void {
        this.stack.push({ eventType, callback });
    }

    public trigger(eventType: string, state: IShipmentState): void {
        const event = this.stack.find(event => event.eventType === eventType);

        event?.callback(state);
    }
}
