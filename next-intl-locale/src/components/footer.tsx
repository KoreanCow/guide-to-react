import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <div>
      < p > {t('copyright')}</p >
    </div >
  )
}
