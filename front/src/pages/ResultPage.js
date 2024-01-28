import React from 'react'
import { Link } from 'react-router-dom'

const ResultPage = () => {

  return (
    <div>
      This is Result Page
      <p>
        <Link to='/question'>back to question</Link>
      </p>

    </div>
  )
}

export default ResultPage
