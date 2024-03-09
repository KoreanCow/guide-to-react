import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      getServerSession Result
      {session?.user?.name ? (
        <div>
          {session?.user?.name}
          <p>User Email : {session?.user?.email}</p>
          {
            session.user.image && (
              <>
                <div className={'flex'}>
                  <span>User Image : </span>
                  <img className={'w-20 h-20 ml-5'} src={session?.user?.image} />
                </div>
              </>
            )
          }
        </div>
      ) : (
        <div>Not logged in</div>
      )
      }
    </>
  );
}
