'use client';
import React, { useState } from 'react';

const WriteBlogPage = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;
    // sending data
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          content,
        }),
      });
      console.log(res);
      setSuccess(true);
      e.target.reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='p-10 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold mb-4'>Write a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='title' className='block font-semibold mb-2'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block font-semibold mb-2'>
            Description
          </label>
          <input
            type='text'
            id='description'
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='content' className='block font-semibold mb-2'>
            Content
          </label>
          <textarea
            style={{ fontFamily: 'monospace' }}
            id='content'
            rows={20}
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='text-green-500 mb-4'>
          {success && 'Created blog successfully !!'}
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default WriteBlogPage;
