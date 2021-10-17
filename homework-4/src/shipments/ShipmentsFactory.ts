import { IShipment, IShipmentState } from '../interfaces';
import { Letter } from './Letter';
import { Package } from './Package';
import { Oversize } from './Oversize';

export const LETTER_MAX_WEIGHT = 15;
export const PACKAGE_MAX_WEIGHT = 160;

export class ShipmentsFactory {
    public createShipment(state: IShipmentState): IShipment {
        switch (true) {
            case state.weight <= LETTER_MAX_WEIGHT:
                return new Letter(state);
            case state.weight <= PACKAGE_MAX_WEIGHT:
                return new Package(state);
            case state.weight > PACKAGE_MAX_WEIGHT:
                return new Oversize(state);
            default:
                return new Letter(state);
        }
    }
}
