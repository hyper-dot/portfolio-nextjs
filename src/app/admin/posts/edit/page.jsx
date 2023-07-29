'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [success, setSuccess] = useState(false);

  // Data fetching
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    markdown: '',
  });

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // State variables to store form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const markdown = e.target[2].value;
    console.log({ title, desc, markdown });
    try {
      const res = axios.put(`/api/posts/${slug}`, formData);
      router.back();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>
        <div className='p-10 max-w-4xl mx-auto'>
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
              <label htmlFor='content' className='block font-semibold mb-2'>
                Content
              </label>
              <textarea
                style={{ fontFamily: 'monospace' }}
                id='content'
                rows={20}
                name='markdown'
                value={formData.markdown}
                onChange={handleChange}
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
              Save Edit
            </button>
          </form>
        </div>
      </h1>
    </div>
  );
};

export default Page;
