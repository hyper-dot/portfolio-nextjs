import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <Link className='px-10 py-2 bg-blue-500 rounded-md ' href='/admin/posts'>
        See All Post
      </Link>
      <Link
        className='px-10 py-2 bg-blue-500 rounded-md '
        href='/admin/projects'
      >
        See All Projects
      </Link>
    </div>
  );
};

export default page;
