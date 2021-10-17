import { Gui } from './Gui';
import { Client } from './Client';
import { ShipmentsFactory } from './shipments';

const gui = new Gui();
const client = new Client(gui);
const factory = new ShipmentsFactory();
const letterShipment = factory.createShipment({
    shipmentId: 0,
    toAddress: 'toAddress',
    fromAddress: 'fromAddress',
    toZipCode: 'toZipCode',
    fromZipCode: '511',
    weight: 161,
});

client.onShip(letterShipment);
