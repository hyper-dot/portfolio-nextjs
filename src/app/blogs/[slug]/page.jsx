import React from 'react';
import './slug.css';
import { getPostByslug } from '@/utils/post';
import readableDate from '@/utils/readableDate';
import { marked } from 'marked';
marked.use({
  mangle: false,
  headerIds: false,
});

const page = async ({ params }) => {
  const blog = await getPostByslug(params.slug);
  const markup = { __html: marked.parse(blog.markdown) };
  return (
    <div className='p-10 pt-28 height-screen  flex flex-wrap items-start justify-center'>
      <div className='w-full md:max-w-3xl'>
        <p className='text-gray-400 text-sm mb-2'>
          ✍️ {readableDate(blog.createdAt)} by Roshan Paudel
        </p>
        <h1 className='text-3xl font-semibold mb-4'>{blog.title}</h1>
        <div className='content mb-4' dangerouslySetInnerHTML={markup}></div>
      </div>
    </div>
  );
};

export default page;
