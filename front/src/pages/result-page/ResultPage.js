import React, { useEffect, useState } from "react";
import "./ResultPage.scss";
import axios from 'axios';
import LoadingPage from '../loading-page/LoadingPage';

const ResultsPage = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/result',
          { withCredentials: true })
        setFormData(response.data);
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  // React component
  return (
    <>
      {!isLoading ? (
        <LoadingPage />
      ) : (
        <div className="PageContainer">
          {formData.MBTI}
          <div className="ContentBox">
            <div className="TitleContainer">
              <img className="DeliveryImage" src="/image/pizzaResultBoy.png" alt="pizza delivery" />
              <span className="Title">
                <span className="TitleText">담백한</span>
                <span className="TitleTextGroup">
                  <span className="TitleText" style={{ color: "#FF7A00", fontWeight: "bold" }}>
                    포테이토 피자
                  </span>
                  <span className="TitleText">같은 당신</span>
                </span>
              </span>
            </div>
            <span className="Content" style={{ color: "#FF7A00", fontWeight: "bold", paddingRight: "5px" }}>
              포테이토 피자는
            </span>
            <span className="Content">
              기본적인 재료인 감자로 독특하고 담백한 맛을 만들어냅니다. 포테이토
              피자는 내적인 가치와 깊은 사고를 중요시하는 성격 유형으로, 겉으로
              보기에는 단순해 보일 수 있지만, 속은 풍부하고 복잡한 내면의 세계를
              가지고 있습니다. 마치 포테이토 피자가 겉보기에는 소박해 보이지만, 그
              맛이 깊고 풍부한 것처럼 말이죠.
            </span>
            <p></p>
            <span className="Content">
              포테이토 피자는 통찰력이 뛰어나고, 사람들의 감정과 동기에 대해 깊이
              이해하며, 종종 다른 사람들의 필요를 자신의 것보다 앞세우는 경향이
              있습니다. 이들은 포테이토 피자처럼 겸손하고 진실되며, 자신의 가치와
              신념을 강하게 지킵니다. 포테이토 피자가 제공하는 부드러우면서도 깊은
              맛은 포테이토 피자의 섬세하고 진지한 성격을 잘 반영합니다.
            </span>
          </div>
          <div className="ButtonsContainer">
            <div className="Button">다시하기</div>
            <div className="Button">URL 복사하기</div>
            <div className="Button">카카오톡으로 공유</div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default ResultsPage;
