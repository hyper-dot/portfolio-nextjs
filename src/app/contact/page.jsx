'use client';
import React from 'react';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { ImSpinner2, ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [notification, setNotification] = useState('');

  const notify = (text) => {
    setNotification(text);
    setTimeout(() => {
      setNotification('');
      setSuccess(false);
      setFail(false);
    }, 5000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
    console.log(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
    console.log(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          notify('Sent !!');
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setFail(true);
          notify('Error !!');
          setLoading(false);
        },
      );
  };

  return (
    <div className='p-10 pt-28 min-h-screen flex items-start justify-center'>
      <div className='max-w-xl'>
        <h1 className='text-3xl font-semibold mb-4'>🤝 Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className='mb-4'>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='bg-transparent w-full border border-gray-400 rounded-md p-2'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              required
              id='email'
              name='email'
              className='bg-transparent w-full border border-gray-400 rounded-md p-2'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <textarea
              required
              id='message'
              name='message'
              className='bg-transparent w-full border border-gray-400 rounded-md p-2'
              rows='4'
              placeholder='Your Message'
            />
          </div>
          <div className='flex items-center'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            >
              {loading == true ? (
                <div className='flex gap-2 items-center'>
                  <div className='animate-spin inline'>
                    <ImSpinner2 />
                  </div>
                  Send Message
                </div>
              ) : (
                'Send Message'
              )}
            </button>

            {success && (
              <p className='text-green-500 pl-2 flex items-center gap-2'>
                <TiTick /> {notification}
              </p>
            )}
            {fail && (
              <p className='text-red-500 pl-2 flex items-center gap-2'>
                <ImCross /> {notification}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
