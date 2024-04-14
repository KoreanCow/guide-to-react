const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  const token = req.headers.authorization.split(' ')[1];

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const { nickname } = decodedToken;

  res.json({ nickname });
});

module.exports = router;
