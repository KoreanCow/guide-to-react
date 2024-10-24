import LocaleSwitcher from '@/app/components/LocaleSwitcher';
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import React from 'react'

export default function About() {
  const t = useTranslations('HomePage');


  return (
    <div>
      <p>{t('about')}</p>
      <Link href='/'>back</Link>
      <LocaleSwitcher />
    </div>
  )
}
