var express = require('express');
var router = express.Router();

/* GET order listing. */
router.get('/', function(req, res) {
  res.render('order', { title:'Order' });
});

module.exports = router;
