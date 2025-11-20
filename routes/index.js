var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HollywoodStar' });
});

router.get('/reviews', function(req, res, next) {
  res.render('reviews', { title: 'HollywoodStar' });
});

module.exports = router;
