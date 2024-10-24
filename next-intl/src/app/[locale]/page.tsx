
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LocaleSwitcher from '../components/LocaleSwitcher';


export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <LocaleSwitcher /> {/* 여기에 LocaleSwitcher 추가 */}
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}