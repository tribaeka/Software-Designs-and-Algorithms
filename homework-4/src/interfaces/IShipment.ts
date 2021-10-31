import { IShipmentState } from './IShipmentState';

export interface IShipment {
    getShipmentId(): number;
    getState(): IShipmentState;
    ship(): string;
}
