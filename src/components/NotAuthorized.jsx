import React from 'react';
import SignOutButton from './SignOutButton';

const NotAuthorized = () => {
  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-4xl text-red-500 font-bold'>😡 Not Authorized!!</h1>
      <SignOutButton />
    </div>
  );
};

export default NotAuthorized;
