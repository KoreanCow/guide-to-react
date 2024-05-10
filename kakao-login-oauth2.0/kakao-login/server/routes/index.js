var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res, next) => {

  res.json({ key: process.env.REST_API_KEY });
});
router.post('/', async (req, res, next) => {
  try {
    const code = req.body.code;
    console.log(code);
    const response = await axios.post('https://kauth.kakao.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: process.env.REST_API_KEY,
      redirect_uri: 'http://localhost:3000/oauth',
      code: code,
      client_secret: process.env.CLIENT_SECRET_KEY
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    // const tokenType = response.data.token_type
    const accessToken = response.data.access_token


    const userInfo = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })

    const user = userInfo.data;
    res.status(200).json({ accessToken, user })

    console.log(userInfo.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 오류입니다.' });
  }
});
router.get('/logout', async (req, res) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken = authorizationHeader.split(' ')[1];
    const response = await axios.post('https://kapi.kakao.com/v1/user/logout', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.send("Successfully logged out from Kakao.");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 오류입니다.' });
  }
})

module.exports = router;
