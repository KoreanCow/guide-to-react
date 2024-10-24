'use client';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onLanguageChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <div className="border-2 rounded p-2">
      <p className="sr-only">Change language</p>
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
    </div>
  );
}
