'use client';
import React, { useState } from 'react';
import axios from 'axios';

const page = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
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

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('githubUrl', githubUrl);
    formData.append('liveUrl', liveUrl);
    formData.append('image', image);
    formData.append('desc', desc);

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: process.env.NEXT_PUBLIC_BACKEND_TOKEN,
          },
        },
      );
      console.log(res);
      notify(res.data.message);
      if (res.data.message === 'success') {
        setSuccess(true);
        notify(`Created Project Successfully !!`);

        // Reset form
        setImage(null);
        setTitle('');
        setDesc('');
        setLiveUrl('');
        setGithubUrl('');
      } else {
        setFail(true);
        notify(`Failed to create project !! Server Error`);
      }
    } catch (error) {
      setFail(true);
      notify(`Couldn't Send the Data to the Server !!`);
      console.error('Error uploading data:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='col-span-3 w-full p-10 max-w-4xl mx-auto'>
      <h1 className='text-center text-2xl mb-4'>Add a new project here:</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='title' className='block font-semibold mb-2'>
            Title
          </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='liveUrl' className='block font-semibold mb-2'>
            Live Url
          </label>
          <input
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            type='text'
            id='liveUrl'
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='githubUrl' className='block font-semibold mb-2'>
            Github Url
          </label>
          <input
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            type='text'
            id='githubUrl'
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='desc' className='block font-semibold mb-2'>
            Description
          </label>
          <textarea
            rows={5}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type='text'
            id='desc'
            className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>
        <div className='my-4 object-cover'>
          {image ? (
            <img
              className='h-28 w-28 object-cover border-2 border-blue-400'
              src={URL.createObjectURL(image)}
              alt=''
            />
          ) : null}
        </div>
        <div className='mb-4'>
          <label htmlFor='image' className='block font-semibold mb-2'>
            Image
          </label>
          <input
            accept='image/*'
            type='file'
            onChange={(e) => setImage(e.target.files[0])}
            id='image'
            className='bg-transparent w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            required
          />
        </div>

        {success && <p className='text-green-500'>{notification}</p>}
        {fail && <p className='text-red-500'>{notification}</p>}

        <button
          className='inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          type='submit'
        >
          {loading ? 'submitting...' : 'submit'}
        </button>
      </form>
    </div>
  );
};

export default page;
