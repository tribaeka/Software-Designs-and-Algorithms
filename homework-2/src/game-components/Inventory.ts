import { Item } from './Item';
import { IItemComparator } from '../interfaces';
import { sortBy } from 'lodash';

export class Inventory {
    private items: Item[] = [];

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(comparator?: IItemComparator): void {
        if (comparator) {
            this.items = this.items.sort(comparator.compare);
        } else {
            this.items = sortBy(this.items, 'value');
        }
    }

    public toString(): string {
        return this.items.join(', ');
    }
}
