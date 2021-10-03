import { Pages } from '../src/pages';
import { Magazine } from '../src/magazine';
import { PageFactory, PageRelation } from '../src/PageFactory';

describe('Magazine', () => {
    it('toString should return correct value', () => {
        let counter = 1;
        const magazine = new Magazine(
            'G.Q',
            new Pages([
                PageFactory.createPage(1, PageRelation.MAGAZINE),
                PageFactory.createPage(2, PageRelation.MAGAZINE),
            ]),
        );

        for (const page of magazine) {
            expect(`${magazine.toString()}, ${page?.toString()}`).toEqual(
                `Magazine: G.Q with number of pages: 2, here is page with article #${counter} and it\'s material is glossy paper`,
            );
            counter++;
        }
    });
});
