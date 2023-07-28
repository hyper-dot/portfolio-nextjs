'use client';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

const ThemeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return mode === 'light' ? (
    <div onClick={toggle}>🌙</div>
  ) : (
    <div onClick={toggle}>☀️</div>
  );
};

export default ThemeToggle;
