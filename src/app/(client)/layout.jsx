import React from 'react';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <Socials />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default layout;
