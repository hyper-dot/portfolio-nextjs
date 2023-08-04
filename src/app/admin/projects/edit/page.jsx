'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Spinner from '@/components/Spinner';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // Data fetching
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    liveUrl: '',
    githubUrl: '',
  });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_IMAGE_API}/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      });
  }, []);

  if (!formData) {
    return (
      <div className='height-screen'>
        <div className='h-3/4 flex justify-center items-center text-red-500 text-3xl font-bold'>
          No Project Found !!!
        </div>
      </div>
    );
  }

  if (loading) return <Spinner />;

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_IMAGE_API}/api/projects/${id}`,
        formData,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_IMAGE_TOKEN,
          },
        },
      );
      console.log(res);
      router.back();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>
        <div className='min-h-screen p-10 max-w-4xl mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='title' className='block font-semibold mb-2'>
                Title
              </label>
              <input
                type='text'
                value={formData.title}
                onChange={handleChange}
                id='title'
                name='title'
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
                value={formData.desc}
                name='desc'
                onChange={handleChange}
                className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='liveUrl' className='block font-semibold mb-2'>
                Live Url
              </label>
              <input
                type='text'
                id='liveUrl'
                value={formData.liveUrl}
                name='liveUrl'
                onChange={handleChange}
                className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='githubUrl' className='block font-semibold mb-2'>
                Github Url
              </label>
              <input
                type='text'
                id='githubUrl'
                value={formData.githubUrl}
                name='githubUrl'
                onChange={handleChange}
                className='bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                required
              />
            </div>

            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            >
              Save Edit
            </button>
          </form>
        </div>
      </h1>
    </div>
  );
};

export default Page;
