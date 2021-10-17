import { Shipment, ShipmentType } from './Shipment';
import { IShipmentState } from '../interfaces';

export class Letter extends Shipment {
    constructor(state: IShipmentState) {
        super(state);
        this.initShipper();
    }

    protected initShipper(): void {
        this.shipper = this.getShipper(ShipmentType.LETTER);
    }
}
