import { IShipper } from '../interfaces/IShipper';

class AirEastShipper implements IShipper {
    private costPerOunce = 39;

    public getCost(weight: number): number {
        return Math.round(weight * this.costPerOunce) / 100;
    }
}

export default new AirEastShipper();
