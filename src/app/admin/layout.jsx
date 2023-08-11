'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Spinner from '@/components/admin/Spinner';
import NotAuthorized from '@/components/NotAuthorized';
import SignInButton from '@/components/SignInButton';
import Nav from '@/components/admin/Nav';

const layout = ({ children }) => {
  const session = useSession();

  if (session.status === 'unauthenticated') return <SignInButton />;

  if (
    session.status === 'authenticated' &&
    session.data.user.email != 'rozanpoudel@gmail.com'
  ) {
    return <NotAuthorized />;
  }

  if (session.status === 'loading') return <Spinner />;

  return (
    <div className='h-screen grid grid-cols-4'>
      <Nav />
      {children}
    </div>
  );
};

export default layout;
