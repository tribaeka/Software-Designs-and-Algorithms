import { IShipper } from '../interfaces';
import { ShipmentType } from '../shipments/Shipment';

const COST_PER_OUNCE_FOR_LETTER = 42;
const COST_PER_OUNCE_FOR_PACKAGE = 20;

export class ChicagoSprintShipper implements IShipper {
    private costPerOunce: number;

    constructor(type: ShipmentType) {
        switch (type) {
            case ShipmentType.LETTER: {
                this.costPerOunce = COST_PER_OUNCE_FOR_LETTER;
                break;
            }
            case ShipmentType.PACKAGE: {
                this.costPerOunce = COST_PER_OUNCE_FOR_PACKAGE;
                break;
            }
            case ShipmentType.OVERSIZE: {
                this.costPerOunce = 0;
                break;
            }
        }
    }

    public getCost(weight: number): number {
        return Math.round(weight * this.costPerOunce) / 100;
    }
}
