import { IShipper } from '../interfaces';
import { ShipmentType } from '../shipments/Shipment';

const COST_PER_OUNCE_FOR_LETTER = 39;
const COST_PER_OUNCE_FOR_PACKAGE = 25;
const ADDITIONAL_COST_FOR_OVERSIZE = 1000;

export class AirEastShipper implements IShipper {
    private costPerOunce: number;
    private additionalCost = 0;

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
                this.costPerOunce = COST_PER_OUNCE_FOR_PACKAGE;
                this.additionalCost = ADDITIONAL_COST_FOR_OVERSIZE;
                break;
            }
        }
    }

    public getCost(weight: number): number {
        return Math.round(weight * this.costPerOunce + this.additionalCost) / 100;
    }
}
