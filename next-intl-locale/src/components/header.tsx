import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from './locale-switcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='p-4'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>{t('home')}</Link>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
