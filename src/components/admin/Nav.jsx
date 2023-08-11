import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const Nav = () => {
  return (
    <div className='min-h-screen bg-gray-800 text-white py-10'>
      <div className='px-10 h-full flex flex-col justify-center item-center'>
        <Link className='py-2' href='/'>
          Home
        </Link>
        <Link className='py-2' href='/admin'>
          Admin
        </Link>
        <Link className='py-2 ' href='/admin/posts'>
          See All Post
        </Link>
        <Link className='py-2 ' href='/admin/projects'>
          See All Projects
        </Link>
        <div className='py-2 cursor-pointer' onClick={() => signOut()}>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Nav;
