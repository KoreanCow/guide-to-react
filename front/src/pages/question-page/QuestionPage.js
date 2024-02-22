import React, { useEffect, useState } from "react";
import LoadingPage from "../loading-page/LoadingPage";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import "./QuestionPage.scss";
import axios from "axios";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [uuid, setUuid] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['uuid']);

  const [survey, setSurvey] = useState([]); // 질문지
  const [answers, setAnswers] = useState({}); // 질문 결과 값
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현쟤 질문위치 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/');
        setSurvey(response.data.testSurvey);
        setUuid(response.data.testUUID);
        setCookie('uuid', response.data.testUUID, { path: '/', maxAge: 36000 });
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = async (selectedAnswer) => {
    const updatedAnswers = { ...answers, [currentQuestionIndex]: selectedAnswer };
    setAnswers(updatedAnswers);

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
  };


  return (
    <>
      {!isLoading ? (
        <LoadingPage />
      ) : (
        <div className="question-container">
          {survey.map((s, index) => {
            if (index === currentQuestionIndex) {
              return (
                <div key={index}>
                  <p>{s.title}</p>
                  <button onClick={() => handleAnswer(1)}>{s.first_qeustion}</button>
                  <button onClick={() => handleAnswer(2)}>{s.second_qeustion}</button>
                </div>
              );
            }
          })}
          {JSON.stringify(answers)}
        </div>
      )}
    </>
  );
};

export default QuestionPage;
