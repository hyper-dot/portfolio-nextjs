import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
  return (
    <div className='card-with-shadow  border bg-white border-gray-200 shadow-md rounded-md p-4'>
      <img
        src={project.imageUrl}
        alt={project.title}
        className='w-full h-40 object-cover rounded-md mb-4'
      />
      <h2 className='text-xl font-semibold'>{project.title}</h2>
      <p className=''>{project.description}</p>
      <div className='mt-4'>
        <Link
          href={project.demoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2'
        >
          Live Demo
        </Link>
        <Link
          href={project.sourceCodeUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded'
        >
          <AiFillGithub className='inline mb-1' /> Source Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
