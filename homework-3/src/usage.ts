import { Book } from './Book';
import { Pages } from './Pages';
import { PageFactory, PageRelation } from './PageFactory';
import { Magazine } from './Magazine';
import { Comics } from './Comics';

const book = new Book(
    'Harry Potter',
    'J.K.Rowling',
    new Pages([
        PageFactory.createPage(1, PageRelation.BOOK),
        PageFactory.createPage(2, PageRelation.BOOK),
        PageFactory.createPage(3, PageRelation.BOOK),
        PageFactory.createPage(4, PageRelation.BOOK),
    ]),
);

for (const page of book) {
    console.log(page);
}

const magazine = new Magazine(
    'G.Q',
    new Pages([PageFactory.createPage(1, PageRelation.MAGAZINE), PageFactory.createPage(2, PageRelation.MAGAZINE)]),
);

for (const page of magazine) {
    console.log(page);
}

const comics = new Comics(
    'Spider-Man',
    'Stan Lee',
    'Some artist',
    new Pages([PageFactory.createPage(1, PageRelation.COMICS), PageFactory.createPage(2, PageRelation.COMICS)]),
);

for (const page of comics) {
    console.log(page);
}
