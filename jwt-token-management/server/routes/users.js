const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { id, password } = req.body;

  try {
    const user = await User.findOne({ id });
    if (!user) return res.status(400).json({ msg: '아이디가 존재하지 않습니다. ' });

    bcrypt.compare(password, user.password, async (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) return res.status(400).json({ msg: '비밀번호가 틀립니다.' });

      const accessToken = jwt.sign({ nickname: user.nickname }, process.env.JWT_SECRET, { expiresIn: '2m' });
      const refreshToken = jwt.sign({ nickname: user.nickname }, process.env.JWT_REFRESH_SECRET, { expiresIn: '10m' });

      res.json({ accessToken, refreshToken });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: '서버 오류' });
  }
});
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


router.post('/refresh-token', async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.status(401).json({ error: '리프레시 토큰이 없습니다' });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: '리프레시 토큰이 만료되었거나 유효하지 않습니다' });
      }
      const nickname = decoded.nickname;
      const accessToken = jwt.sign({ nickname }, process.env.JWT_SECRET, { expiresIn: '15m' });
      res.json({ accessToken });
    });
  } catch (error) {
    console.error('액세스 토큰 재발급에 실패했습니다:', error);
    res.status(500).json({ error: '서버 오류' });
  }
});
module.exports = router;
