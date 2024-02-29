var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  const { email, password } = req.body;
  console.log(email, password);

  res.json({ email: email, password: password });
});

module.exports = router;
