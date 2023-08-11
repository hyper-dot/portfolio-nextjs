'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '@/components/admin/Nav';

const page = () => {
  const [count, setCount] = useState();
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_IMAGE_API + '/ip', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_IMAGE_TOKEN,
        },
      })
      .then((res) => setCount(res.data.count))
      .catch((err) => console.log(err));

    axios
      .get(process.env.NEXT_PUBLIC_IMAGE_API + '/ipdetailed', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_IMAGE_TOKEN,
        },
      })
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='col-span-3 flex flex-col justify-center items-center gap-4'>
      <h1 className='pb-2 text-xl text-green-500 '>
        Welcome To Admin Panel !!
      </h1>
      <h2>Total Visitors Count : {count}</h2>
      <ul>
        {countries?.map((c, index) => (
          <li key={index}>
            {c.country} : {c.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
