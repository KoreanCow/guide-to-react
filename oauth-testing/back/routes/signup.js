var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const { email, password, name } = req.body;
  console.log(email, password, name);
  res.json({
    email: email,
    password: password,
    name: name
  })
});

module.exports = router;
