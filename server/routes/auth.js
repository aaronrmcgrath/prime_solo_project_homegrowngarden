// AUTHENTICATION

var express = require('express');
var router = express.Router();
var passport = require('../auth/passport');

// router.get('/google', passport.authenticte('google'); //??? In Antoinette's demo she used googCal, I'm not...


// GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google',
  {
    successRedirect: '/private',
    failureRedirect: '/'
  })
);


// Get /auth - is this request coming from a logged in user?
router.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    res.json({ status: true, name: req.user.googleName });  //* What is .json doing?
  } else {
    res.json({ status: false });
  }
});


// GET /auth/logout
router.get('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
