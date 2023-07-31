'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SignInButton = () => {
  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='pb-1 text-2xl font-bold'>Login to Continue</h1>
      <button
        className='px-10 py-2 bg-blue-400 rounded-md '
        onClick={() => signIn('google')}
      >
        <AiFillGoogleCircle className='inline text-2xl ' /> Continue with Google
      </button>
    </div>
  );
};

export default SignInButton;
