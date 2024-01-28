import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Root 페이지 

const Main = () => {
  const [data, setData] = useState(null)
  // 이 부부은 버튼 이벤트 
  const onClickHandler = async () => {
    await axios.get('http://localhost:5001/question')
      .then(function (response) {
        setData(response.data)
        console.log(response)

      })
      .catch(function (err) {
        console.log(err);
      })
  }
  if (data !== null) {
    window.location.href = '/question'; // 페이지 이동
  }
  return (
    <div>
      <p>
        root page
      </p>
      <button onClick={onClickHandler}>go to /question</button>
      <Link to='/question'>go to question</Link>
    </div>
  )
}

export default Main
