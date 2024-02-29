import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import SkeletonBtn from './components/SkeletonBtn';
import "./QuestionPage.scss";
import axios from "axios";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [uuid, setUuid] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['uuid']);

  const [survey, setSurvey] = useState([]); // 질문지
  const [answers, setAnswers] = useState([]); // 질문 결과 값
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현쟤 질문위치 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const surveyresponse = await axios.get('http://localhost:8080/');
        const uuidresponse = await axios.get('http://localhost:8080/uuid');
        setSurvey(surveyresponse.data.testSurvey);
        setUuid(uuidresponse.data.testUUID);
        setCookie('uuid', uuidresponse.data.testUUID, { path: '/', maxAge: 36000 });

        setTimeout(() =>
          setIsLoading(true)
          , 3000)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = async (selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedAnswer;

    // 다음 질문으로 이동
    if (currentQuestionIndex < survey.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      try {
        navigate('/result');
        await axios.post('http://localhost:8080/question',
          { answers: updatedAnswers },
          { withCredentials: true });
      } catch (error) {
        console.error(error);
      }
    }
    setAnswers(updatedAnswers);
  };

  return (
    <>
      {!isLoading ? (
        <div className="question-container">
          <div className='question-box'>
            <p className="question-title" >질문지 목록!</p>
            <SkeletonBtn />
            <SkeletonBtn />
          </div>
        </div>
        // <LoadingPage />
      ) : (
        <div className="question-container">
          <div className='question-box'>
            {survey.map((s, index) => {
              if (index === currentQuestionIndex) {
                return (
                  <>
                    <p className="question-title">{s.title}</p>
                    <button className='question-answer-btn' onClick={() => handleAnswer(0)}>{s.first_qeustion}</button>
                    <button className='question-answer-btn' onClick={() => handleAnswer(1)}>{s.second_qeustion}</button>
                  </>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};


export default QuestionPage;
