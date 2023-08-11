'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountVisitors = () => {
  const saveIP = async () => {
    try {
      await axios.post('https://imageserver-1-r6781895.deta.app/ip');
    } catch (e) {
      console.log('Error sending data to server !!');
    }
  };
  useEffect(() => {
    saveIP();
  }, []);

  return;
};

export default CountVisitors;
