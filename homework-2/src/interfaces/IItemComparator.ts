import { Item } from '../game-components';
import { IComparator } from './IComparator';

export interface IItemComparator extends IComparator<Item> {
    compare(first: Item, second: Item): number;
}
