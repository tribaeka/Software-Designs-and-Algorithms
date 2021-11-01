import { Gui } from './Gui';
import { Client } from './Client';
import { ShipmentsFactory } from './shipments';
import { ShipmentMarks } from './shipments/Shipment';

const gui = new Gui();
const client = new Client(gui);
const factory = new ShipmentsFactory();
gui.toggleMarks();
const letterShipment = factory.createShipment({
    shipmentId: 0,
    toAddress: 'toAddress',
    fromAddress: 'fromAddress',
    toZipCode: 'toZipCode',
    fromZipCode: '511',
    weight: 160,
    marks: [ShipmentMarks.FRAGILE, ShipmentMarks.DO_NOT_LEAVE],
});

client.onShip(letterShipment);
