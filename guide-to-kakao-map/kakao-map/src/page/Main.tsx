import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='App'>
      <p>
        <Link to='/usesdk'>
          지도 줌, 지도 위치 변경
        </Link>
      </p>
      <p>
        <Link to='/pick'>
          마커 설정
        </Link>
      </p>
    </div>
  )
}

export default Main
