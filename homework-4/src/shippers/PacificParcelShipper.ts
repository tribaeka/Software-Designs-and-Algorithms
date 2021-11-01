import { IShipper } from '../interfaces';
import { ShipmentType } from '../shipments/Shipment';
import { PACKAGE_MAX_WEIGHT } from '../shipments';

const COST_PER_OUNCE_FOR_LETTER = 51;
const COST_PER_OUNCE_FOR_PACKAGE = 19;
const ADDITIONAL_COST_PER_OUNCE_FOR_OVERSIZE = 2;

export class PacificParcelShipper implements IShipper {
    private costPerOunce: number;
    private additionalCostPerOunce = 0;

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
                this.additionalCostPerOunce = ADDITIONAL_COST_PER_OUNCE_FOR_OVERSIZE;
                break;
            }
        }
    }

    public getCost(weight: number): number {
        const finalCostPerOunce = this.costPerOunce + (weight - PACKAGE_MAX_WEIGHT) * this.additionalCostPerOunce;

        return Math.round(weight * finalCostPerOunce) / 100;
    }
}
