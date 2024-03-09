/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Data {
  name: string;
  email?: string;
  image?: string;
}

export default function APITestPage() {
  const [datas, setDatas] = useState<Data>({
    name: '',
    email: '',
    image: '',
  });

  useEffect(() => {
    fetch('/api/whoAmI')
      .then((res) => res.json())
      .then((data) => setDatas(data));

  }, [])

  return (
    <div>
      <div>
        API Route From <span className='font-bold underline'>Client</span>
      </div>
      {datas && (
        <>
          <p>Name: {datas.name}</p>
          {datas.email && (
            <p>Email: {datas.email}</p>
          )}
          {datas.image && (
            <div className={'flex'}>
              Image:
              <img className={'w-20 h-20 ml-5'} src={datas.image} alt='user img' />
            </div>
          )}

        </>
      )}

    </div>
  )
}