import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import readableDate from '@/utils/readableDate';

const BlogCard = ({ blog }) => {
  return (
    <div className='border max-w-2xl border-gray-400 rounded-md p-4 flex flex-col md:flex-row'>
      <img
        src={blog.img}
        alt={blog.title}
        className='w-full md:w-40 h-40 md:h-30 object-cover rounded-md mr-4'
      />
      <div>
        <h2 className='text-md mt-4 md:mt-0 font-semibold mb-2'>
          {blog.title}
        </h2>
        <p className='text-sm mb-2'>
          {readableDate(blog.createdAt)} by Roshan Paudel
        </p>
        <p className='mb-4'>{blog.desc}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          rel='noopener noreferrer'
          className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
