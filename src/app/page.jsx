import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts } from '@/utils/post';
import readableDate from '@/utils/readableDate';

const HomePage = async () => {
  const posts = await getRecentPosts();

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

          <h1 className='text-xl font-semibold mt-10 mb-4'>Recent Posts</h1>
          <ul className='grid gap-4'>
            {posts.map((p) => (
              <Link href={`blogs/${p.slug}`}>
                <li
                  key={p._id}
                  className='border border-gray-400 transition px-4  rounded-md '
                >
                  <small className=''>{readableDate(p.createdAt)}</small>
                  <h2 className='text-xl font-semibold mb-2'>{p.title}</h2>
                  <p className='mb-4'>{p.desc}</p>
                </li>
              </Link>
            ))}
          </ul>
          <Link
            className='inline-block mt-2 underline underline-offset-4 text-blue-600 font-semibold'
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
