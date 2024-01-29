var express = require('express');
var router = express.Router();

const testData = [{
  id: 1,
  text: 'test 1'
}, {
  id: 2,
  text: 'test 2'
}, {
  id: 3,
  text: 'test #3'
}, {
  id: 4,
  text: 'test 4'
}, {
  id: 5,
  text: 'test 5'
},]

// http://localhost:5001/question
router.get('/', function (req, res, next) {
  res.json(testData);
});

module.exports = router;