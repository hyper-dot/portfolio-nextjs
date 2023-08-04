'use client';
import React from 'react';
import Link from 'next/link';
import SignOutButton from '@/components/SignOutButton';

const page = () => {
  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='pb-2 text-xl text-green-500 '>
        Welcome To Admin Panel !!
      </h1>
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
