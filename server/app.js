// SERVER

// NODE MODULES
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// AUTHORIZATION
var session = require('express-session');
var passport = require('./auth/passport');
var authConfigs = require('./config/auth');

// CUSTOM MODULES
var index = require('./routes/index');
var auth = require('./routes/auth');
var isLoggedIn = require('./utils/auth'); //aCode, in kCode it is var user (I think?)
var private = require('./routes/private');
var db = require('.utils/db');


// EXPRESS
var app = express();

app.use('/public', express.static('public')); // server files from public

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DATABASE CONNECTION
db();

// SESSION - need clarification!!!
app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  SaveUninitialized: false,
  cookie: { maxage: 60000, secure: false }
}));

// PASSPORT
app.use(passport.initialize());

app.use(passport.session());

// ROUTES
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/', index);

// SERVER

// Set
app.set('port', (process.env.PORT || 8000));

// Listen
app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});
