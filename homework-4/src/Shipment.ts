import { IShipmentState } from './interfaces';
import { IShipper } from './interfaces/IShipper';
import AirEastShipper from './shippers/AirEastShipper';
import ChicagoSprintShipper from './shippers/ChicagoSprintShipper';
import PacificParcelShipper from './shippers/PacificParcelShipper';

export class Shipment {
    private static idCounter = 0;

    constructor(private state: IShipmentState) {
        if (state.shipmentId === 0) {
            this.state = {
                ...state,
                shipmentId: Shipment.getShipmentId(),
            };
        }
    }

    public static getShipmentId(): number {
        return ++Shipment.idCounter;
    }

    public getState(): IShipmentState {
        return this.state;
    }

    public getShipmentId(): number {
        return this.state.shipmentId;
    }

    public getToAddress(): string {
        return this.state.toAddress;
    }

    public setToAddress(toAddress: string): void {
        this.state.toAddress = toAddress;
    }

    public getFromAddress(): string {
        return this.state.fromAddress;
    }

    public setFromAddress(fromAddress: string): void {
        this.state.fromAddress = fromAddress;
    }

    public getToZipCode(): string {
        return this.state.toZipCode;
    }

    public setToZipCode(toZipCode: string): void {
        this.state.toZipCode = toZipCode;
    }

    public getFromZipCode(): string {
        return this.state.fromZipCode;
    }

    public setFromZipCode(fromZipCode: string): void {
        this.state.fromZipCode = fromZipCode;
    }

    public getWeight(): number {
        return this.state.weight;
    }

    public getMarks(): string[] | undefined {
        return this.state?.marks;
    }

    public setMarks(marks: string[]): void {
        this.state.marks = marks;
    }

    public ship(): string {
        const { shipmentId, fromAddress, toAddress, weight } = this.state;
        const cost = this.getShipper().getCost(weight);

        return `Shipment ${shipmentId} was sent from ${fromAddress} to ${toAddress} and cost ${cost} dollars`;
    }

    private getShipper(): IShipper {
        switch (this.state.fromZipCode[0]) {
            case '1':
            case '2':
            case '3':
                return AirEastShipper;
            case '4':
            case '5':
            case '6':
                return ChicagoSprintShipper;
            case '7':
            case '8':
            case '9':
                return PacificParcelShipper;
            default:
                return AirEastShipper;
        }
    }
}
