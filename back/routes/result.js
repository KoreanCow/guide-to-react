var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:8080/result
router.get('/', async (req, res) => {
  const MBTI = 'ESFJ';
  res.json({ MBTI });
});

module.exports = router;
