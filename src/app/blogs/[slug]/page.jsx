import React from 'react';
import './slug.css';
import { getPostByslug } from '@/utils/post';
import readableDate from '@/utils/readableDate';

const page = async ({ params }) => {
  const blog = await getPostByslug(params.slug);
  const markup = { __html: blog.parsedHtml };
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-3xl'>
        <img
          src={blog.img}
          className='w-full h-80  object-cover rounded-md mb-4'
        />
        <p className='text-gray-400 text-sm mb-2'>
          {readableDate(blog.createdAt)} by Roshan Paudel
        </p>
        <h1 className='text-3xl font-semibold mb-4'>{blog.title}</h1>
        <div className='content mb-4' dangerouslySetInnerHTML={markup}></div>
      </div>
    </div>
  );
};

export default page;
