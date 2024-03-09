/* eslint-disable @next/next/no-img-element */
import { headers } from 'next/headers';

export default async function APIFromServer() {
  const resp = await fetch('http://localhost:3000/api/whoAmI', {
    method: 'GET',
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div>
      <div>
        API Route From <span className='font-bold underline'>Server</span>
      </div>
      <p>Name: {resp?.name}</p>
      <p>Email: {resp?.email}</p>
      {resp?.image && (
        <div className={'flex'}>
          Image:
          <img className={'w-20 h-20 ml-5'} src={resp.image} alt='user img' />
        </div>
      )}
    </div>
  )
}