// PASSPORT

// NODE MODULES
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

// CUSTOM MODULES
var config = require('../config/auth');

// DB QUERY MODELS SHOULD BE CALLED IN HERE
// var UserService = require('../services/user'); //this is for mongo, need to change for SQL

// serialize the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserialize the user
passport.deserializeUser(function (id, done) {
  //need db call!
});

passport.use('google', //what?) {
  //need to figure out SQL/Oauth2
}
