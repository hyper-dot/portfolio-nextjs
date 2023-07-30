import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/utils/post';
import readableDate from '@/utils/readableDate';

const BlogsShowcasePage = async () => {
  const data = await getAllPosts();
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-8'>All Blogs </h1>
        <div className='flex flex-col gap-8'>
          {data.map((post) => (
            <Link
              href={`blogs/${post.slug}`}
              className='card-with-shadow  border border-gray-300 shadow-md transition px-4  rounded-md '
              key={post._id}
            >
              <small className=''>{readableDate(post.createdAt)}</small>
              <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
              <p className='mb-4'>{post.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsShowcasePage;
