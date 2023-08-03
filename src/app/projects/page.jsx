'use client';
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { notFound } from 'next/navigation';
import useSWR from 'swr';
import Spinner from '@/components/Spinner';

const ShowcasePage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_IMAGE_API}/api/projects`,
    fetcher,
  );

  if (isLoading) return <Spinner />;
  if (error) {
    console.log(error);
    return notFound;
  }

  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-10'>
          Projects🚀 I have worked on !
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data.map((d) => (
            <ProjectCard key={d._id} project={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
