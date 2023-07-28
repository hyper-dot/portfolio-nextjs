import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className='p-10 min-h-screen flex items-center justify-center'>
      <div className='max-w-xl'>
        <h1 className='text-3xl font-semibold mb-4'>About Me</h1>
        <Image
          width={250}
          height={250}
          src='https://i.ibb.co/58m25r2/IMG-0980.jpg'
          alt='roshan'
        />
        <p>
          Hi, I'm [Your Name], a passionate developer who is currently learning
          and exploring the world of programming. I love to build web
          applications and learn new technologies. My goal is to become a
          skilled and proficient developer capable of creating amazing projects
          that make a positive impact on people's lives.
        </p>
        <p>
          When I'm not coding, you can find me exploring the latest tech news,
          reading programming blogs, or contributing to open-source projects.
          I'm always eager to connect with fellow developers and learn from the
          community, so feel free to reach out to me on [Your preferred social
          media platforms or contact information].
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
