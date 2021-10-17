import { Gui } from './Gui';
import { Client } from './Client';
import { Shipment } from './Shipment';

const gui = new Gui();
const client = new Client(gui);
const shipment = new Shipment({
    shipmentId: 0,
    toAddress: 'toAddress',
    fromAddress: 'fromAddress',
    toZipCode: 'toZipCode',
    fromZipCode: '911',
    weight: 10,
});

client.onShip(shipment);
