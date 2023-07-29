import React from 'react';
import { getPostByslug } from '@/utils/post';
import readableDate from '@/utils/readableDate';

const page = async ({ params }) => {
  const blog = await getPostByslug(params.slug);
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-3xl'>
        <h1 className='text-3xl font-semibold mb-4'>{blog.title}</h1>
        <p className='text-gray-400 text-sm mb-2'>
          {readableDate(blog.createdAt)} by Roshan Paudel
        </p>
        <img
          src={blog.img}
          className='w-full h-80  object-cover rounded-md mb-4'
        />
        <p className='mb-4'>{blog.content}</p>
      </div>
    </div>
  );
};

export default page;
