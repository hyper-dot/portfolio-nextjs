'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBinFill } from 'react-icons/ri';
import useSWR from 'swr';
import axios from 'axios';
import Spinner from '@/components/Spinner';
import React from 'react';
import Link from 'next/link';

const page = () => {
  //NEW WAY TO FETCH DATA
  //Fetch data if all condition fulfilled
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `https://imageserver-1-r6781895.deta.app/api/projects`,
    fetcher,
  );

  if (isLoading) return <Spinner />;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  // Delete handler function
  const handleDelete = async (slug) => {
    try {
      await axios.delete(`/api/posts/${slug}`);
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='pt-10 min-h-screen flex justify-center'>
        <h1>ALL Posts</h1>
        <ul className='mt-10 max-w-2xl'>
          {data.map((project) => (
            <li className='list-disc mt-2' key={project._id}>
              {project.title}
              <Link
                className='ml-4 text-xl inline-block hover:text-blue-600'
                href={`/admin/posts/edit`}
              >
                <BsPencilSquare />
              </Link>
              <button
                className='text-xl ml-4 inline-block hover:text-red-600'
                onClick={() => handleDelete()}
              >
                <RiDeleteBinFill />
              </button>
            </li>
          ))}
        </ul>
        <Link
          className='text-blue-500 underline underline-offset-4'
          href='/admin/projects/new'
        >
          Create New Project
        </Link>
      </div>
      <div>
        <h2>All Projects</h2>
        <Link href='/admin/projects/new'>Add New Project</Link>
      </div>
    </>
  );
};

export default page;
