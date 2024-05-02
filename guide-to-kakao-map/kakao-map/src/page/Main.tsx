import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <p>
        <Link to='nosdk'>
          no sdk
        </Link>
      </p>
      <p>
        <Link to='/usesdk'>
          use sdk
        </Link>
      </p>
    </div>
  )
}

export default Main
