import React from 'react';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center height-screen'>
      <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500'></div>
    </div>
  );
};

export default Spinner;
