// SERVER ROUTES - basic routing

var express = require('express');
var router = express.Router();
var path = require('path');

//router.post() *** Not using because will not require a registration?

router.get('/*', function (req, res) {
  var file = req.params[0] || '/assets/views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});
