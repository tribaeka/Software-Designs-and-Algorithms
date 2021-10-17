import { Item } from './Item';

export abstract class Consumable extends Item {
    private consumed: boolean;

    protected constructor(
        value: number,
        name: string,
        weight: number,
        private spoiled: boolean
    ) {
        super(value, name, weight);
        this.consumed = false;
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }

    public eat(): string {
        this.setConsumed(true);

        return this.isSpoiled()
            ? `You eat ${this.getName()}\nYou feel sick.`
            : `You eat ${this.getName()}.`;
    }

    public use(): string {
        return this.isConsumed()
            ? `There is nothing left of the ${this.getName()} to consume.`
            : this.eat();
    }

    public toString(): string {
        return `${super.toString()}, Spoiled: ${this.spoiled}`;
    }
}
