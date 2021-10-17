import { Consumable } from './Consumable';

const PIZZA_DEFAULT_VALUE = 50;
const PIZZA_DEFAULT_NAME = 'pizza';
const PIZZA_DEFAULT_WEIGHT = 0.2;

export class Pizza extends Consumable {
    private slicesEaten = 0;

    constructor(private numberOfSlices: number, spoiled: boolean) {
        super(PIZZA_DEFAULT_VALUE, PIZZA_DEFAULT_NAME, PIZZA_DEFAULT_WEIGHT, spoiled);
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);

                return super.eat();
            }

            return `${super.eat()}\n${this.getNumberOfRemainingSlices()} slices left`;
        }

        return '';
    }

    private getNumberOfRemainingSlices(): number {
        return this.numberOfSlices - this.slicesEaten;
    }
}
