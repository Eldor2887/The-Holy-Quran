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
app.get('/fotiha', (req, res) => {
    res.render('fotiha');
});
app.get('/baqara', (req, res) => {
    res.render('baqara');
});
app.get('/imran', (req, res) => {
    res.render('imran');
});
app.get('/niso', (req, res) => {
    res.render('niso');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});