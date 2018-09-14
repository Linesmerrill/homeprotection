var express = require('express');
var router = express.Router();

/* GET demo page. */
router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'Express' });
});

module.exports = router;
