var express = require('express');
var router = express.Router();
var userContollers = require('../contoller/user.controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/user', userContollers);
module.exports = router;
