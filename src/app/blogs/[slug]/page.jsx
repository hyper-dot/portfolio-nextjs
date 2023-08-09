import React from 'react';
import Post from '@/models/Post';
import './slug.css';
import readableDate from '@/utils/readableDate';
import connect from '@/utils/db';
import 'highlight.js/styles/github-dark.css';

// Revalidate in 10 secs
export const revalidate = 43200;

export async function generateMetadata({ params }) {
  await connect();
  const blog = await Post.findOne({ slug: params.slug });
  return {
    title: blog.title,
    description: blog.desc,
    author: 'Roshan Paudel',
    keywords: blog.keywords,
  };
}
//
const page = async ({ params }) => {
  await connect();
  const blog = await Post.findOne({ slug: params.slug });

  return (
    <div className='p-10 pt-28 height-screen  flex flex-wrap items-start justify-center'>
      <div className='w-full md:max-w-3xl'>
        <p className='text-gray-400 text-sm mb-2'>
          ✍️ {readableDate(blog.createdAt)} by Roshan Paudel
        </p>
        <h1 className='text-3xl font-semibold mb-4'>{blog.title}</h1>
        <div
          className='content mb-4'
          dangerouslySetInnerHTML={{ __html: blog.parsedHtml }}
        ></div>
      </div>
    </div>
  );
};

export default page;
