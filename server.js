const express = require('express')
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 8099;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//helpers

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'eduardo rodRiguez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones desde el puerto ${port}`);
});