'use client';
import NotAuthorized from '@/components/NotAuthorized';
import SignInButton from '@/components/SignInButton';
import Spinner from '@/components/Spinner';
import { useSession } from 'next-auth/react';

import React from 'react';

const page = () => {
  const session = useSession();
  console.log(session);

  if (session.status === 'unauthenticated') return <SignInButton />;

  if (
    session.status === 'authenticated' &&
    session.data.user.email != 'rozanpoudel@gmail.com'
  ) {
    return <NotAuthorized />;
  }

  if (session.status === 'loading') return <Spinner />;

  return (
    <div>
      <h2>All Projects</h2>
    </div>
  );
};

export default page;
