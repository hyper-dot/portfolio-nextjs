'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <div>
      <button
        className='px-10 py-2 bg-red-400 rounded-md '
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
