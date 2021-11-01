import { IShipment, IShipmentState } from '../interfaces';

export class ShipmentMarkDecorator implements IShipment {
    constructor(private shipment: IShipment) {}

    public getShipmentId(): number {
        return this.shipment.getShipmentId();
    }

    public getState(): IShipmentState {
        return this.shipment.getState();
    }

    public ship(): string {
        const { marks } = this.getState();
        let optionalShipTail = '';

        if (marks) {
            optionalShipTail = marks?.map(mark => `\n\n**${mark}**`).join('');
        }

        return this.shipment.ship() + optionalShipTail;
    }
}
