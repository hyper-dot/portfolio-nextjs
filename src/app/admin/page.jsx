'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SignOutButton from '@/components/SignOutButton';
import axios from 'axios';

const page = () => {
  const [count, setCount] = useState();
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_IMAGE_API + '/ip', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_IMAGE_TOKEN,
        },
      })
      .then((res) => setCount(res.data.count))
      .catch((err) => console.log(err));

    axios
      .get(process.env.NEXT_PUBLIC_IMAGE_API + '/ipdetailed', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_IMAGE_TOKEN,
        },
      })
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='pb-2 text-xl text-green-500 '>
        Welcome To Admin Panel !!
      </h1>
      <h2>Total Visitors Count : {count}</h2>
      <ul>
        {countries?.map((c, index) => (
          <li key={index}>
            {c.country} : {c.count}
          </li>
        ))}
      </ul>
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
