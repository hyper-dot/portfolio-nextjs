import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '@/utils/post';
import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBinFill } from 'react-icons/ri';

const page = async () => {
  const data = await getAllPosts();
  return (
    <div className='pt-10 min-h-screen flex justify-center'>
      <h1>ALL Posts</h1>
      <ul className='mt-10'>
        {data.map((post) => (
          <li className='list-disc mt-2'>
            {post.title}
            <Link
              className='ml-4 text-xl inline-block hover:text-blue-600'
              href={`admin/posts/edit?slug=${post.slug}`}
            >
              <BsPencilSquare />
            </Link>
            <Link
              className='text-xl ml-4 inline-block hover:text-red-600'
              href={`/posts`}
            >
              <RiDeleteBinFill />
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className='text-blue-500 underline underline-offset-4'
        href='/admin/posts/new'
      >
        Create New Post
      </Link>
    </div>
  );
};

export default page;
