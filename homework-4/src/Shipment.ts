import { IShipmentState } from './interfaces';

const COST_MODIFICATION = 39;

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
        return `Shipment ${this.state.shipmentId} was sent from ${this.state.fromAddress} to ${
            this.state.toAddress
        } and cost ${this.getCost()} dollars`;
    }

    private getCost(): number {
        return Math.round(this.state.weight * COST_MODIFICATION * 100) / 100;
    }
}
