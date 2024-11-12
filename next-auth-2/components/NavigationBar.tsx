'use client';

import React from 'react'
import styles from './NavigationBar.module.scss'
import { signIn } from 'next-auth/react'
export default function NavigationBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.top}>
        <button onClick={() => signIn('kakao')}>
          로그인
        </button>
      </div>
      <div className={styles.bottom}>
        <p>다이어트 레시피</p>
        <div>
          <input />
          <button>테스트</button>
        </div>
      </div>
    </div>
  )
}
