'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBinFill } from 'react-icons/ri';
import useSWR from 'swr';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Spinner from '@/components/Spinner';
import NotAuthorized from '@/components/NotAuthorized';

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

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(`/api/posts`, fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  const handleDelete = async (slug) => {
    try {
      await axios.delete(`/api/posts/${slug}`);
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='pt-10 min-h-screen flex justify-center'>
      <h1>ALL Posts</h1>
      <ul className='mt-10'>
        {data.map((post) => (
          <li className='list-disc mt-2' key={post._id}>
            {post.title}
            <Link
              className='ml-4 text-xl inline-block hover:text-blue-600'
              href={`/admin/posts/edit?slug=${post.slug}`}
            >
              <BsPencilSquare />
            </Link>
            <button
              className='text-xl ml-4 inline-block hover:text-red-600'
              onClick={() => handleDelete(post.slug)}
            >
              <RiDeleteBinFill />
            </button>
          </li>
        ))}
      </ul>
      <Link
        className='text-blue-500 underline underline-offset-4'
        href='/admin/posts/new'
      >
        Create New Post
      </Link>
    </div>
  );
};

export default page;
