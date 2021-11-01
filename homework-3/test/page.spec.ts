import { Page, PageMaterial, PageTypes } from '../src/page';

describe('Page', () => {
    it('toString should return correct value', () => {
        const page = new Page(3, PageTypes.WITH_TEXT, PageMaterial.SIMPLE_PAPER);

        expect(page.toString()).toEqual("here is page with text #3 and it's material is simple paper");
    });
});
