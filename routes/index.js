var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/vim.js.mem', function(req, res) {
    res.redirect('/javascripts/vim.js.mem');
});


module.exports = router;
