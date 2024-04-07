const express = require('express');
const router = express.Router();
const { io } = require('../app');

const chatRooms = ['chat1', 'chat2', 'chat3'];
/* GET home page. */
router.get('/', (req, res) => {
  res.json(chatRooms);
});
router.post('/', (req, res) => {
  const body = req.body;
  const roomName = body.roomName;
  chatRooms.push(roomName);
  res.json(chatRooms);
});

chatRooms.forEach(chatRoom => {
  router.get(`/chatRooms/${chatRoom}`, (req, res) => {

    io.of('/chatRooms').to(chatRoom).emit('message', 'Hello from chat room ' + chatRoom);
    res.send(`Chat room ${chatRoom}`)
  })


})
module.exports = router;
