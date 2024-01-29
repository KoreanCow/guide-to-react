import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const QuestionComponent = () => {
  const [state, setState] = useState([]);
  const postdata = { id: 'postdata', text: 'seoul-gandong' }
  const navigate = useNavigate();

  useEffect(() => {
    // 이 부부은 Link 모듈을 사용했을때 url을 통해 이동했을 때
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/question');
        console.log(response);
        setState(response.data); // response.data를 setState에 전달하여 상태를 업데이트합니다.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수를 호출하여 데이터를 가져옵니다.

  }, []);
  const onClickHanlder = async () => {
    try {
      const response = await axios.post('http://localhost:5001/result', { postdata }); // postdata 변수를 객체로 전달
      console.log(response);
      navigate("/result", { state: { value: response.data } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <p>
        This is QuestionComponent
        With node js Server
      </p>


      {
        state.map(item => (
          <div key={item.id}>
            {item.id} : {item.text}
          </div>
        ))
      }
      <button onClick={onClickHanlder}>
        post button
      </button>
      <p>
        <Link to='/' >back to root</Link>
      </p>
    </div>
  )
}

export default QuestionComponent
