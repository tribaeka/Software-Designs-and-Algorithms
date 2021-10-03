import { Pages } from './Pages';

export class PagesIterable {
    constructor(protected pages: Pages) {}

    [Symbol.iterator]() {
        let nextIndex = 1;

        return {
            next: () => {
                // console.log(
                //     nextIndex <= this.pages.getAmountOfPages()
                //         ? { value: this.pages.getPage(nextIndex), done: false }
                //         : { value: undefined, done: true },
                // );
                return nextIndex <= this.pages.getAmountOfPages()
                    ? { value: this.pages.getPage(nextIndex++), done: false }
                    : { value: undefined, done: true };
            },
        };
    }
}
