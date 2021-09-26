import { IComparable } from '../interfaces';

let numberOfItems = 0;

export abstract class Item implements IComparable<Item> {
    private readonly id: number;

    protected constructor(
        private value: number,
        private name: string,
        private weight: number
    ) {
        this.id = numberOfItems++;
    }

    getId(): number {
        return this.id;
    }

    getValue(): number {
        return this.value;
    }
    setValue(price: number): void {
        this.value = price;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getWeight(): number {
        return this.weight;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        if (this.value === other.value) {
            return this.name.localeCompare(other.name, undefined, { sensitivity: 'accent' });
        }

        return this.value > other.value ? 1 : -1;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public static reset(): void {
        numberOfItems = 0;
    }
}
