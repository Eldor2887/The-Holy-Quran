const path = require('path');
const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const Schema = mongoose.Schema;

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, './public')));

app.use(cookieSession({
    // setup how long cookie session lasts
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['eldorjbvbvkejbvwkjbvkwjbkwjbfkwjfbmado101096']
}));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/fatihah', (req, res) => {
    res.render('fatihah');
});
app.get('/baqarah', (req, res) => {
    res.render('baqarah');
});
app.get('/imran', (req, res) => {
    res.render('imran');
});
app.get('/nisa', (req, res) => {
    res.render('nisa');
});
app.get('/maidah', (req, res) => {
    res.render('maidah');
});
app.get('/anam', (req, res) => {
    res.render('anam');
});
app.get('/araf', (req, res) => {
    res.render('araf');
});
app.get('/find', (req, res) => {
    res.render('search');
});
app.post('/search', (req, res) => {
    const searchInput = req.body.search.toLowerCase();
    if(searchInput === 'fatihah' || searchInput === 'al-fatihah'){
        res.render('fatihah');
    }else if(searchInput === 'baqarah' || searchInput === 'al-baqarah'){
        res.render('baqarah');
    }else if(searchInput === 'nisa' || searchInput === 'an-nisa' || searchInput === 'annisa'){
        res.render('nisa');
    }else if(searchInput === 'maidah' || searchInput === 'almaidah' || searchInput === 'al-maidah'){
        res.render('maidah');
    }else if(searchInput === 'anam' || searchInput === 'al-anam' || searchInput === 'alanam'){
        res.render('anam');
    }else if(searchInput === 'araf' || searchInput === 'al-araf' || searchInput === 'alaraf'){
        res.render('araf');
    }
    else{
        res.render('alertbox');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});