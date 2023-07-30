'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

const SignInButton = () => {
  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <button
        className='px-10 py-2 bg-blue-500 rounded-md '
        onClick={() => signIn('google')}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SignInButton;
