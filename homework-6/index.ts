import express, { Application } from 'express';
import { createServer } from 'http';
import handlebars from 'express-handlebars';
import { APP_PORT } from './configs/config';
import { CURRENCIES } from './configs/data';

const app: Application = express();
const serverInstance = createServer(app);

app.set('view engine', '.hbs');
app.engine(
    '.hbs',
    handlebars({
        layoutsDir: __dirname + '/views/layouts',
        extname: '.hbs',
        defaultLayout: 'index',
        partialsDir: __dirname + '/views/partials/',
    }),
);

app.use(express.static(__dirname + '/controllers'));

app.get('/', (req, res) => {
    res.redirect('/text');
});

app.get('/text', (req, res) => {
    res.render('main', { isTextFormEnabled: true, currencies: CURRENCIES });
});

app.get('/slider', (req, res) => {
    res.render('main', { isSliderFormEnabled: true, currencies: CURRENCIES });
});

serverInstance.listen(APP_PORT, () => console.log(`App is listening on port ${APP_PORT}!`));
