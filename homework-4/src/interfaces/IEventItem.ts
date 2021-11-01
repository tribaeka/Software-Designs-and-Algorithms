import { IShipmentState } from './IShipmentState';

export interface IEventItem {
    eventType: string;
    callback: (state: IShipmentState) => void;
}
