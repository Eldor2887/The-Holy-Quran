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
app.get('/niso', (req, res) => {
    res.render('niso');
});
app.get('/find', (req, res) => {
    res.render('search');
});
app.post('/search', (req, res) => {
    const searchInput = req.body.search;
    if(searchInput === 'fatihah' || searchInput === 'al-fatihah'){
        res.render('fatihah');
    }else if(searchInput === 'baqarah' || searchInput === 'al-baqarah'){
        res.render('baqarah');
    }
    else{
        res.json({'error':'Not found'});
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});