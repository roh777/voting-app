const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./router/routes');
const pug = require('pug');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const helpers = require('./helper');
require('./handlers/passport');


// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too


// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({ 
    secret: process.env.SECRET,
    key : process.env.KEY,
    saveUninitialized : true,
    resave : true
 }));

app.use(passport.initialize());
app.use(passport.session());


app.use((req,res,next)=>{
    res.locals.h = helpers;
    next();
});


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);
module.exports = app;

