import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ResultPage = () => {

  const location = useLocation();
  const value = location.state.value;


  console.log(value)
  return (
    <div>
      This is Result Page
      <p>postdata ID : {value.postdata.id}</p>
      <p>postdata TEXT : {value.postdata.text}</p>
      <p>
        <Link to='/question'>back to question</Link>
      </p>

    </div>
  )
}

export default ResultPage
