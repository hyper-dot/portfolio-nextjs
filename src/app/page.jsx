import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content: 'This is the content of Blog 1',
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'This is the content of Blog 2',
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'This is the content of Blog 3',
    },
  ];
  return (
    <>
      <div className='p-10 pt-28 min-h-screen flex items-start justify-center'>
        <div className='max-w-xl'>
          <Image
            width={50}
            height={50}
            src='https://i.ibb.co/C7691ZL/untitled.png'
            alt='roshan'
            className='border-2 border-gray-400 rounded-full h-16 w-16 object-contain mb-4'
          />
          <h1 className='text-3xl font-semibold mb-4'>
            Hi there, <span className='wave'>👋</span>
          </h1>
          <p className=''>
            I am Roshan Paudel, self-taught programming enthusiast from 🇳🇵Nepal
            with a 💡 thirst for knowledge and a knack for ⚡🧠quick learning.
            <br />
            Passionate about crafting efficient and elegant solutions to complex
            challenges. Ready to tackle new opportunities and make an impact
            with my skills! 💻🔥 Excited to collaborate and build the future
            together🚀{' '}
          </p>
          <Link
            href='/contact'
            className='inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          >
            🔔 Ping Me
          </Link>

          <div className='p-4'>
            <h1 className='text-xl font-semibold mt-10 mb-4'>Recent Posts</h1>
            <ul className='grid gap-4'>
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className='border border-gray-400 p-4 rounded-md'
                >
                  <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
                  <p className=''>{blog.content}</p>
                </li>
              ))}
            </ul>
          </div>
          <Link
            className='pl-5 underline underline-offset-4 text-blue-400 font-semibold'
            href='/blogs'
          >
            More Blogs...
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
