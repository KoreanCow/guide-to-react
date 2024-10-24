import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>
        {t('title')}
      </h1>
      <p>{t('description')}</p>

    </div>
  );
}
