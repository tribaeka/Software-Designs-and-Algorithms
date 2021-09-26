import { Item } from './Item';
import { IItemComparator } from '../interfaces';

export class ItemWeightComparator implements IItemComparator {
    public compare(first: Item, second: Item) {
        if (first.getWeight() === second.getWeight()) {
            return first.compareTo(second);
        }

        return first.getWeight() > second.getWeight() ? 1 : -1;
    }
}
