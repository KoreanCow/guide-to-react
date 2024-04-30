import React from 'react'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
const MainPage = () => {
  return (
    <div className={styles.main__container}>
      <p className={styles.main__title}>
        MainPage
      </p>
      <Link to='/News'> news</Link>
    </div>
  )
}

export default MainPage
