'use client';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Spinner from '@/components/Spinner';
import SignInButton from '@/components/SignInButton';
import NotAuthorized from '@/components/NotAuthorized';
import SignOutButton from '@/components/SignOutButton';

const page = () => {
  const session = useSession();

  if (session.status === 'loading') return <Spinner />;

  if (
    session.status === 'authenticated' &&
    session.data.user.email != process.env.NEXT_PUBLIC_ADMIN_EMAIL
  ) {
    return <NotAuthorized />;
  }

  if (session.status === 'unauthenticated') return <SignInButton />;

  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <Link className='px-10 py-2 bg-blue-500 rounded-md ' href='/admin/posts'>
        See All Post
      </Link>
      <Link
        className='px-10 py-2 bg-blue-500 rounded-md '
        href='/admin/projects'
      >
        See All Projects
      </Link>
      <SignOutButton />
    </div>
  );
};

export default page;
