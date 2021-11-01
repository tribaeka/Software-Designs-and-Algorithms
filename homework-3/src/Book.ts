import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
    constructor(private title: string, private author: string, pages: Pages) {
        super(pages);
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getAmountOfPages()}`;
    }
}
