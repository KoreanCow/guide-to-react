const express = require('express');
const router = express.Router();

const testUUID = '1234-5678-4321-8765';
const testSurvey = [
  {
    "id": "1",
    "title": "피자는 먹을때 혼자 먹기?",
    "first_qeustion": "혼자먹기",
    "second_qeustion": "같이 먹기"
  }, {
    "id": "2",
    "title": "피자먹는방삭",
    "first_qeustion": "포크or장갑",
    "second_qeustion": "맨손으로"
  },
  {
    "id": "3",
    "title": "피자 나눌때",
    "first_qeustion": "대충대충",
    "second_qeustion": "공평하게"
  },
  {
    "id": "1",
    "title": "피자는 먹을때 혼자 먹기?",
    "first_qeustion": "혼자먹기",
    "second_qeustion": "같이 먹기"
  }, {
    "id": "2",
    "title": "피자먹는방삭",
    "first_qeustion": "포크or장갑",
    "second_qeustion": "맨손으로"
  },
  {
    "id": "3",
    "title": "피자 나눌때",
    "first_qeustion": "대충대충",
    "second_qeustion": "공평하게"
  },
  {
    "id": "1",
    "title": "피자는 먹을때 혼자 먹기?",
    "first_qeustion": "혼자먹기",
    "second_qeustion": "같이 먹기"
  }, {
    "id": "2",
    "title": "피자먹는방삭",
    "first_qeustion": "포크or장갑",
    "second_qeustion": "맨손으로"
  },
  {
    "id": "3",
    "title": "피자 나눌때",
    "first_qeustion": "대충대충",
    "second_qeustion": "공평하게"
  },
  {
    "id": "1",
    "title": "피자는 먹을때 혼자 먹기?",
    "first_qeustion": "혼자먹기",
    "second_qeustion": "같이 먹기"
  }, {
    "id": "2",
    "title": "피자먹는방삭",
    "first_qeustion": "포크or장갑",
    "second_qeustion": "맨손으로"
  },
  {
    "id": "3",
    "title": "피자 나눌때",
    "first_qeustion": "대충대충",
    "second_qeustion": "공평하게"
  }
]
// http://localhost:8080/
router.get('/', (req, res) => {
  res.json({ testSurvey }); // 비동기 작업 완료 후 응답 전송
});
router.get('/uuid', (req, res) => {
  res.json({ testUUID }); // 비동기 작업 완료 후 응답 전송
});


module.exports = router;
