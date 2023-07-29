import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className='p-10 pt-28 min-h-screen flex items-start justify-center'>
      <div className='max-w-xl'>
        <h1 className='text-3xl font-semibold mb-4'>📨 Contact Me</h1>
        <form>
          <div className='mb-4'>
            <input
              type='text'
              id='name'
              name='name'
              className='bg-transparent w-full border border-gray-400 rounded-md p-2'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              id='email'
              name='email'
              className='bg-transparent w-full border border-gray-400 rounded-md p-2'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <textarea
              id='message'
              name='message'
              className='bg-transparent w-full border border-gray-400 rounded-md p-2'
              rows='4'
              placeholder='Your Message'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
