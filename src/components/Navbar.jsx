'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className='pt-4'>
      <div className='flex items-center justify-center'>
        <div className='flex space-x-4'>
          <Link href='/' className='font-semibold hover:text-blue-500'>
            Home
          </Link>
          <Link href='/about' className='font-semibold hover:text-blue-500'>
            About
          </Link>
          <Link href='/projects' className='font-semibold hover:text-blue-500'>
            Projects
          </Link>
          <Link href='/contact' className='font-semibold hover:text-blue-500'>
            Contact
          </Link>
          <div className='cursor-pointer'>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
