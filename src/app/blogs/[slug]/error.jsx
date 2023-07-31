import React from 'react';

const NotAuthorized = () => {
  return (
    <div className='height-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-4xl text-red-500 font-bold'>Error in fetching blog</h1>
    </div>
  );
};

export default NotAuthorized;
