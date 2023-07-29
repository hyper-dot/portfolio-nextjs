import React from 'react';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/utils/post';

const BlogsShowcasePage = async () => {
  const data = await getAllPosts();
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-8'>All Blogs </h1>
        <div className='flex flex-col gap-8'>
          {data.map((d) => (
            <BlogCard key={d._id} blog={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsShowcasePage;
