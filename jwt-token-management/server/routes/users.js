const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

router.post('/login', async (req, res) => {

})
router.post('/signup', async (req, res) => {
  console.log(req.body);

  const { id, password, nickname } = req.body;

  try {
    const user = await User.findOne({ id });
    if (user) return res.status(400).json({ msg: '이미 가입된 유저가 존재합니다' });

    const newUser = new User({
      id,
      password,
      nickname,
    });

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        try {
          await newUser.save();
          res.json({ msg: '회원가입이 완료되었습니다' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ msg: '서버 오류' });
        }
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: '서버 오류' });
  }
});

module.exports = router;
