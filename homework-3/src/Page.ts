export enum PageTypes {
    WITH_TEXT = 'with text',
    WITH_ARTICLE = 'with article',
    WITH_IMAGES = 'with images',
}

export enum PageMaterial {
    SIMPLE_PAPER = 'simple paper',
    GLOSSY_PAPER = 'glossy paper',
}

export class Page {
    constructor(private pageNumber: number, private pageType: PageTypes, private pageMaterial: PageMaterial) {}

    getPageNumber(): number {
        return this.pageNumber;
    }

    setPageNumber(pageNumber: number): void {
        this.pageNumber = pageNumber;
    }

    getPageType(): PageTypes {
        return this.pageType;
    }

    setPageType(pageType: PageTypes): void {
        this.pageType = pageType;
    }

    getPageMaterial(): PageMaterial {
        return this.pageMaterial;
    }

    setPageMaterial(pageMaterial: PageMaterial): void {
        this.pageMaterial = pageMaterial;
    }

    toString(): string {
        return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
    }
}
