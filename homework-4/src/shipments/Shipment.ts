import { IShipment, IShipmentState } from '../interfaces';
import { IShipper } from '../interfaces';
import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper } from '../shippers';

export enum ShipmentType {
    LETTER,
    PACKAGE,
    OVERSIZE,
}

export enum ShipmentMarks {
    FRAGILE = 'FRAGILE',
    DO_NOT_LEAVE = 'DO NOT LEAVE IF ADDRESS NOT AT HOME',
    RETURN_RECEIPT_REQUESTED = 'RETURN RECEIPT REQUESTED',
}

export abstract class Shipment implements IShipment {
    private static idCounter = 0;

    constructor(
        protected state: IShipmentState,
        protected shipper: IShipper = new AirEastShipper(ShipmentType.LETTER),
    ) {
        if (state.shipmentId === 0) {
            this.state = {
                ...state,
                shipmentId: this.getShipmentId(),
            };
        }
    }

    public getShipmentId(): number {
        return ++Shipment.idCounter;
    }

    public getState(): IShipmentState {
        return this.state;
    }

    public ship(): string {
        const { shipmentId, fromAddress, toAddress, weight } = this.state;
        const cost = this.shipper.getCost(weight);

        return (
            `Shipment with ID ${shipmentId} will be picked up from ${fromAddress} and shipped to ${toAddress}` +
            `\n\nCost = ${cost === 0 ? 'free' : `${cost} dollars`}`
        );
    }

    protected abstract initShipper(): void;

    protected getShipper(type: ShipmentType): IShipper {
        switch (this.state.fromZipCode[0]) {
            case '1':
            case '2':
            case '3':
                return new AirEastShipper(type);
            case '4':
            case '5':
            case '6':
                return new ChicagoSprintShipper(type);
            case '7':
            case '8':
            case '9':
                return new PacificParcelShipper(type);
            default:
                return new AirEastShipper(type);
        }
    }
}
