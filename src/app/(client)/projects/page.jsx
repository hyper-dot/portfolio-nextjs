'use client';
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { notFound } from 'next/navigation';
import useSWR from 'swr';
import Spinner from '@/components/Spinner';

const ShowcasePage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
    fetcher,
  );

  if (isLoading) return <Spinner />;
  if (error) {
    console.log(error);
    return notFound;
  }

  return (
    <div className='p-10 pt-28 min-h-screen'>
      <h1 className='text-3xl font-semibold mb-14 text-center'>
        Projects I've created 🚀
      </h1>
      <div className='max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        {data.map((d) => (
          <ProjectCard key={d._id} project={d} />
        ))}
      </div>
    </div>
  );
};

export default ShowcasePage;
