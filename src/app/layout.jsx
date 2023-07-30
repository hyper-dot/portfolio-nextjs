import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Roshan Paudel',
  description: 'fullstack web developer from nepal',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <Socials />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
