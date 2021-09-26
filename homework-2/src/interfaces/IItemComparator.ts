import { Item } from '../Item';
import { IComparator } from './IComparator';

export interface IItemComparator extends IComparator<Item> {
    compare(first: Item, second: Item): number;
}
