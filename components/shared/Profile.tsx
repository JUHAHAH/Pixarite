'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          <img
            className="w-8 h-8 rounded-full"
            src={session.user.image || ''}
          />
          <p> {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default Profile;
