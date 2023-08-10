'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SignOutButton from '@/components/SignOutButton';
import axios from 'axios';

const page = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    axios
      .get('https://imageserver-1-r6781895.deta.app/ip')
      .then((res) => setCount(res.data.count));
  }, []);

  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='pb-2 text-xl text-green-500 '>
        Welcome To Admin Panel !!
      </h1>
      <h2>Total Visitors Count : {count}</h2>
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
