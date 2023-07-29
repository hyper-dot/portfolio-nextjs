import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className='border max-w-2xl border-gray-400 rounded-md p-4 flex flex-col md:flex-row'>
      <img
        width={100}
        height={100}
        src={blog.imageUrl}
        alt={blog.title}
        className='w-full md:w-40 h-30 object-cover rounded-md mr-4'
      />
      <div>
        <h2 className='text-md mt-4 md:mt-0 font-semibold mb-2'>
          {blog.title}
        </h2>
        <p className='text-sm mb-2'>
          {blog.date} by {blog.author}
        </p>
        <p className='mb-4'>{blog.content}</p>
        <Link
          href={blog.link}
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
