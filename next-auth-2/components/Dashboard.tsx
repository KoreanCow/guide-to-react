'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession(); // status를 통해 로딩 상태를 확인

  if (status === 'loading') {
    return <p>Loading...</p>; // 로딩 중 표시
  }

  return (
    <div>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>You are not logged in</h1>
          <button onClick={() => signIn('kakao')}>Sign in with Kakao</button>
        </>
      )}
    </div>
  );
}
