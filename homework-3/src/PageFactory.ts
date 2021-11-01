import { Page, PageMaterial, PageTypes } from './Page';

export enum PageRelation {
    BOOK,
    MAGAZINE,
    COMICS,
}

export class PageFactory {
    static createPage(pageNumber: number, relation: PageRelation): Page {
        switch (relation) {
            case PageRelation.BOOK:
                return new Page(pageNumber, PageTypes.WITH_TEXT, PageMaterial.SIMPLE_PAPER);
            case PageRelation.MAGAZINE:
                return new Page(pageNumber, PageTypes.WITH_ARTICLE, PageMaterial.GLOSSY_PAPER);
            case PageRelation.COMICS:
                return new Page(pageNumber, PageTypes.WITH_IMAGES, PageMaterial.GLOSSY_PAPER);
        }
    }
}
