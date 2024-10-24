'use client';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onLanguageChange = (locale: string) => {
    startTransition(() => {
      // 현재 경로를 가져옵니다.
      const currentPath = window.location.pathname;

      // 언어 코드만 대체합니다.
      const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`);

      router.replace(newPath);
    });
  };

  return (
    <div className="border-2 rounded p-2">
      <p className="sr-only">Change language</p>
      {isPending ? (
        <p className="py-1">로딩 중...</p> // 로딩 중일 때 표시
      ) : (
        <>
          <p
            className="cursor-pointer hover:bg-gray-200 py-1 px-2"
            onClick={() => onLanguageChange('en')}
          >
            English
          </p>
          <p
            className="cursor-pointer hover:bg-gray-200 py-1 px-2"
            onClick={() => onLanguageChange('ko')}
          >
            한국어
          </p>
          <p
            className="cursor-pointer hover:bg-gray-200 py-1 px-2"
            onClick={() => onLanguageChange('ja')}
          >
            日本語
          </p>
        </>
      )}
    </div>
  );
}
