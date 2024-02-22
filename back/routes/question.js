var express = require('express');
var router = express.Router();
// http://localhost:8080/question
router.post('/', async (req, res) => {
  const uuid = req.cookies.uuid;
  const requests = req.body;
  console.log(uuid, requests);
  res.json({ uuid, requests });
});

module.exports = router;