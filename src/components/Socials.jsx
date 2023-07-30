import React from 'react';
import a from 'next/link';
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='flex justify-center items-center text-2xl cursor-pointer mt-5 gap-4'>
      <a
        className='hover:text-blue-500'
        href='https://www.facebook.com/leduap.nahsor/'
        target='_blank'
      >
        <AiFillFacebook />
      </a>
      <a
        className='hover:text-blue-500'
        href='https://www.linkedin.com/in/roshan-paudel-200186167/'
        target='_blank'
      >
        <AiFillLinkedin />
      </a>
      <a
        className='hover:text-blue-500'
        href='https://github.com/hyper-dot'
        target='_blank'
      >
        <AiFillGithub />
      </a>
      <a
        className='hover:text-blue-500'
        href='https://www.youtube.com/@rosanpaudel6330'
        target='_blank'
      >
        <BsYoutube />
      </a>
    </div>
  );
};

export default Socials;
