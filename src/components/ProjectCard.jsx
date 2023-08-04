import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
  return (
    <div className='card-with-shadow shadow-pop border bg-white rounded-md p-4 relative pb-14'>
      <img
        src={project.imageUrl}
        alt={project.title}
        className='w-full h-40 object-cover rounded-md mb-4'
      />
      <h2 className='text-xl font-semibold'>{project.title}</h2>
      <p className=''>{project.desc}</p>
      <div className='mt-4 absolute bottom-4'>
        <a
          href={project.liveUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded mr-4'
        >
          Demo
        </a>
        <a
          href={project.githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-2 rounded'
        >
          <AiFillGithub className='inline mb-1' /> Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
