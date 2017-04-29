var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' });
  // res.send("hello")
  res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'));
});

module.exports = router;