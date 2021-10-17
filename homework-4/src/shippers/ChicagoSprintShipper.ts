import { IShipper } from '../interfaces/IShipper';

class ChicagoSprintShipper implements IShipper {
    private costPerOunce = 42;

    public getCost(weight: number): number {
        return Math.round(weight * this.costPerOunce) / 100;
    }
}

export default new ChicagoSprintShipper();
