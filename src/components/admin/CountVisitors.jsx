'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountVisitors = () => {
  const saveIP = async () => {
    try {
      const res = await axios.get('https://api.ipify.org');
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/ip`,
        {
          ip: res.data,
        },
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_BACKEND_TOKEN,
          },
        },
      );
    } catch (e) {
      console.log('Error sending data to server !!');
    }
  };
  useEffect(() => {
    saveIP();
  }, []);

  return <div></div>;
};

export default CountVisitors;
