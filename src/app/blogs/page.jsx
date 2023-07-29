import React from 'react';
import BlogCard from '@/components/BlogCard';
const imgurl =
  'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg';

const blogs = [
  {
    id: 1,
    title:
      'Blog 1 how chatgpt will affect the education system of the poor and underdeveloped country nepal',
    content:
      'This is the content of Blog 1...This is the content of Blog 1...This is the content of Blog 1...',
    date: 'July 28, 2023',
    author: 'John Doe',
    imageUrl: imgurl, // Replace with the URL of the image for Blog 1
    link: '/blogs/slug', // Replace with the URL of the blog post for Blog 1
  },

  {
    id: 1,
    title:
      'Blog 1 how chatgpt will affect the education system of the poor and underdeveloped country nepal',
    content: 'This is the content of Blog 1...',
    date: 'July 28, 2023',
    author: 'John Doe',
    imageUrl: imgurl, // Replace with the URL of the image for Blog 1
    link: 'https://example.com/blog1', // Replace with the URL of the blog post for Blog 1
  },

  {
    id: 1,
    title:
      'Blog 1 how chatgpt will affect the education system of the poor and underdeveloped country nepal',
    content: 'This is the content of Blog 1 This is the content of Blog 1...',
    date: 'July 28, 2023',
    author: 'John Doe',
    imageUrl: imgurl, // Replace with the URL of the image for Blog 1
    link: 'https://example.com/blog1', // Replace with the URL of the blog post for Blog 1
  },
  {
    id: 2,
    title: 'Blog 2',
    content: 'This is the content of Blog 2...',
    date: 'July 25, 2023',
    author: 'Jane Smith',
    imageUrl: imgurl, // Replace with the URL of the image for Blog 2
    link: 'https://example.com/blog2', // Replace with the URL of the blog post for Blog 2
  },
  // Add more blogs as needed
];

const BlogsShowcasePage = () => {
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-8'>All Blogs </h1>
        <div className='flex flex-col gap-8'>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsShowcasePage;
