import { Item } from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
    constructor(private title: string, private author: string, private artist: string, pages: Pages) {
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

    getArtist(): string {
        return this.artist;
    }

    setArtist(artist: string): void {
        this.artist = artist;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${
            this.artist
        }, number of pages: ${this.pages.getAmountOfPages()}`;
    }
}
