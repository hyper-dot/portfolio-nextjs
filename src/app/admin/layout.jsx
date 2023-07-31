'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Spinner from '@/components/Spinner';
import NotAuthorized from '@/components/NotAuthorized';
import SignInButton from '@/components/SignInButton';

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

  return children;
};

export default layout;
