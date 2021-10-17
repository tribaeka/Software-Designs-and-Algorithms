import { IShipper } from '../interfaces/IShipper';

class PacificParcelShipper implements IShipper {
    private costPerOunce = 51;

    public getCost(weight: number): number {
        return Math.round(weight * this.costPerOunce) / 100;
    }
}

export default new PacificParcelShipper();
