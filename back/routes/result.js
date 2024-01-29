var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:5001/result
router.post('/', function (req, res, next) {
  console.log(req.body);
  const test = req.body;

  // 클라이언트로 test 변수를 응답으로 보냅니다.
  res.json(test); // 여기서 응답을 보내고 종료합니다.
});

module.exports = router;
