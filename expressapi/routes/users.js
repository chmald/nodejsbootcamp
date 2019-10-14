var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{user: 'Adam', job: 'Global Security'}, {user: 'Chris', job: 'Blesser of Images'}, {user: 'yourname', job: 'whatdoyoudo'}]);
});

module.exports = router;
