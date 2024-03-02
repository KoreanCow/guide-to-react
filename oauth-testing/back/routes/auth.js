const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

router.get('/', function (req, res, next) {
  res.json({ test: 'success' })
});

router.get('/github/client-credentials', (req, res) => {

  res.json({ clientId, clientSecret });

})

router.post('/github/callback', async (req, res) => {
  const code = req.body.code;
  console.log(code);
  const response = await axios.post('https://github.com/login/oauth/access_token',
    {
      client_id: clientId,
      client_secret: clientSecret,
      code
    },
    {
      headers: {
        accept: 'application/json'
      }
    })

  const accessToken = response.data.access_token;
  const userResponse = await axios.get('https://api.github.com/user', {
    headers: {
      'Authorization': `token ${accessToken}`,
    },
  });
  const user = userResponse.data;


  const name = user.name;
  const email = user.email;
  const nickname = user.login
  console.log('Github user: ', name, email, nickname)
});
module.exports = router;
