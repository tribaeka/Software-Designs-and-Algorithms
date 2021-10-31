import { Pages } from './Pages';
import { Item } from './Item';

export class Magazine extends Item {
    constructor(private title: string, pages: Pages) {
        super(pages);
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getAmountOfPages()}`;
    }
}
