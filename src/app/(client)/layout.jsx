import React from 'react';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Socials />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
