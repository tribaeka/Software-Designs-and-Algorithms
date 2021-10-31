import { Pages } from '../src/pages';
import { Comics } from '../src/comics';
import { PageFactory, PageRelation } from '../src/PageFactory';

describe('Comics', () => {
    it('toString should return correct value', () => {
        let counter = 1;
        const comics = new Comics(
            'Spider-Man',
            'Stan Lee',
            'some author',
            new Pages([PageFactory.createPage(1, PageRelation.COMICS), PageFactory.createPage(2, PageRelation.COMICS)]),
        );

        for (const page of comics) {
            console.log(`${comics.toString()}, ${page?.toString()}`);
            expect(`${comics.toString()}, ${page?.toString()}`).toEqual(
                `Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #${counter} and it\'s material is glossy paper`,
            );
            counter++;
        }
    });
});
