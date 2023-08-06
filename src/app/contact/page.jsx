'use client';
import React from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { useRef, useState } from 'react';
import { ImSpinner2, ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { BsGoogle } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import useSWR from 'swr';
import Spinner from '@/components/Spinner';

import { signIn, signOut, useSession } from 'next-auth/react';

const ContactPage = () => {
  const session = useSession();
  // Contact form states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [notification, setNotification] = useState('');

  // Note states

  const [loadingNote, setLoadingNote] = useState(false);
  const [successNote, setSuccessNote] = useState(false);
  const [failNote, setFailNote] = useState(false);
  const [notificationNote, setNotificationNote] = useState('');

  // Notify Function for contact form
  const notifyContact = (text) => {
    setNotification(text);
    setTimeout(() => {
      setNotification('');
      setSuccess(false);
      setFail(false);
    }, 5000);
  };

  // Notify funciton for note form
  const notifyNote = (text) => {
    setNotificationNote(text);
    setTimeout(() => {
      setNotificationNote('');
      setSuccessNote(false);
      setFailNote(false);
    }, 5000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          notifyContact('Message sent successfully !!');
          setLoading(false);
          e.target.reset();
        },
        () => {
          setFail(true);
          notifyContact('Error ! Message not sent !!');
          setLoading(false);
        },
      );
  };

  //NEW WAY TO FETCH DATA
  //Fetch data if all condition fulfilled
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(`/api/notes`, fetcher);

  if (error) {
    console.log(error);
  }

  // Add note
  const addNote = async (e) => {
    e.preventDefault();
    setLoadingNote(true);
    const note = e.target[0].value;
    const email = session.data.user.email;
    const user = session.data.user.name;
    const img = session.data.user.image;
    try {
      const res = await axios.post('/api/notes', {
        note,
        email,
        user,
        img,
      });
      if (res.status !== 201) {
        setFailNote(true);
        notifyNote('Failed to Add Note !!');
        setLoadingNote(false);
      }
      setSuccessNote(true);
      notifyNote('Added Note Successfully !!');
      setLoadingNote(false);
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
      setFailNote(true);
      notifyNote('Failed to Send Note !!');
      setLoadingNote(false);
    }
  };

  return (
    <div className='p-10 pt-28 min-h-screen max-w-3xl mx-auto grid grid-col-1 sm:grid-cols-2 gap-x-20'>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <h1 className='text-3xl font-semibold mb-4'>🤝 Contact Me</h1>
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
              className='w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded'
            >
              {loading == true ? (
                <div className='flex gap-2 items-center justify-center'>
                  <div className='animate-spin inline'>
                    <ImSpinner2 />
                  </div>
                  Send Message
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          <div>
            {success && (
              <p className='text-green-500 pt-2 flex items-center gap-2'>
                <TiTick /> {notification}
              </p>
            )}
            {fail && (
              <p className='text-red-500 pt-2 flex items-center gap-2'>
                <ImCross /> {notification}
              </p>
            )}
          </div>
        </form>
      </div>
      <div className=''>
        <h1 className='text-center text-3xl font-semibold pb-4'>
          Leave A Note
        </h1>
        <div className='h-60 overflow-y-auto p-4 rounded-md border border-gray-600'>
          {data?.map((d) => (
            <div
              key={d._id}
              className='border-2 border-blue-400 p-2 rounded-lg mb-3 flex gap-2'
            >
              <img src={d.img} className='h-8 w-8 bg-white rounded-full' />
              <div>
                <h4 className='text-sm font-semibold'>{d.user}</h4>
                <p className='font-thin text-sm '>{d.note}</p>
                {d.email === session.data.user.email && (
                  <button className='text-sm text-red-500 font-bold'>
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          {session.status === 'unauthenticated' && (
            <div>
              <button
                onClick={() => {
                  signIn('google');
                }}
                className='bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 flex items-center justify-center gap-2'
              >
                <BsGoogle /> Continue With Google
              </button>
            </div>
          )}
          {session.status === 'authenticated' && (
            <>
              <div className='my-4'>
                <form onSubmit={addNote}>
                  <textarea
                    className='bg-transparent border w-full rounded-md p-2'
                    placeholder={`Add Note as ${session.data.user.name}`}
                  ></textarea>

                  <div>
                    {successNote && (
                      <p className='text-green-500 pt-2'>{notificationNote}</p>
                    )}
                    {failNote && (
                      <p className='text-red-500 pt-2 flex items-center gap-2'>
                        {notificationNote}
                      </p>
                    )}
                  </div>
                  {loadingNote ? (
                    <button className='bg-blue-500 w-full hover:bg-blue-400 text-white font-semibold py-3 px-4 rounded mt-4 flex items-center justify-center gap-2'>
                      <div className='animate-spin inline'>
                        <ImSpinner2 />
                      </div>
                    </button>
                  ) : (
                    <button className='bg-blue-500 w-full hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mt-4 flex items-center justify-center gap-2'>
                      Add
                    </button>
                  )}
                </form>
              </div>
              <button
                onClick={() => {
                  signOut();
                }}
                className='bg-red-500 w-full hover:bg-red-400 text-white font-semibold py-2 px-4 rounded mt-4 flex items-center justify-center gap-2'
              >
                <BiLogOut /> Sign Out
              </button>
            </>
          )}
          {session.status === 'loading' && (
            <button className='bg-blue-500 w-full hover:bg-blue-400 text-white font-semibold py-3 px-4 rounded mt-4 flex items-center justify-center gap-2'>
              <div className='animate-spin inline'>
                <ImSpinner2 />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
