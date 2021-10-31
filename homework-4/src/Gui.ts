import { IEventItem, IShipmentState } from './interfaces';

export class Gui {
    constructor(private stack: IEventItem[] = [], private isMarksEnabled = false) {}

    public getIsMarksEnabled(): boolean {
        return this.isMarksEnabled;
    }

    public toggleMarks(forcedState?: boolean): void {
        this.isMarksEnabled = forcedState || !this.isMarksEnabled;
    }

    public on(eventType: string, callback: (state: IShipmentState) => void): void {
        this.stack.push({ eventType, callback });
    }

    public trigger(eventType: string, state: IShipmentState): void {
        const event = this.stack.find(event => event.eventType === eventType);

        event?.callback(state);
    }
}
