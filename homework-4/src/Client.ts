import { Gui } from './Gui';
import { IShipment, IShipmentState } from './interfaces';

export class Client {
    constructor(private gui: Gui) {
        this.gui.on('start', Client.onBeforeShip);
        this.gui.on('end', Client.onAfterShip);
    }

    public onShip(shipment: IShipment): void {
        const shipmentState = shipment.getState();

        this.gui.trigger('start', shipmentState);
        console.log(shipment.ship());
        this.gui.trigger('end', shipmentState);
    }

    private static onBeforeShip(state: IShipmentState) {
        console.log(`preparing ship with id ${state.shipmentId}`);
    }

    private static onAfterShip(state: IShipmentState) {
        console.log(`clearing space after ship with id ${state.shipmentId} sent`);
    }
}
