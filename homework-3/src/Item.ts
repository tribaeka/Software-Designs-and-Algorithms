import { PagesIterable } from './PagesIterable';
import { Pages } from './Pages';

export abstract class Item extends PagesIterable {
    constructor(pages: Pages) {
        super(pages);
    }
    abstract toString(): string;
}
