import { Page } from './Page';

export class Pages {
    constructor(private pages: Page[]) {}

    getAmountOfPages(): number {
        return this.pages.length;
    }

    getPage(pageNumber: number): Page {
        const page = this.pages.find(page => page.getPageNumber() === pageNumber);

        if (!page) {
            throw new Error('can not find page');
        }

        return page;
    }
}
