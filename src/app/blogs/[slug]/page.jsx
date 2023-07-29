import React from 'react';

const SingleBlogPostPage = () => {
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-3xl'>
        <h1 className='text-3xl font-semibold mb-4'>
          THis is blog title: how nepal is going to survive ?
        </h1>
        <p className='text-gray-400 text-sm mb-2'>
          28 July 2023 by Roshan Paudel
        </p>
        <img
          src='https://images.pexels.com/photos/17718120/pexels-photo-17718120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='w-full h-80  object-cover rounded-md mb-4'
        />
        <p className='mb-4'>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPostPage;
