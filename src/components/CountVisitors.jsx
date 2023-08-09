'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountVisitors = () => {
  const saveIP = async () => {
    try {
      const res = await axios.get('https://api.ipify.org');
      await axios.post('https://imageserver-1-r6781895.deta.app/ip', {
        ip: res.data,
      });
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
