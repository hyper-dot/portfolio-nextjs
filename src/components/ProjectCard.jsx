import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='border border-gray-400  rounded-md p-4'>
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
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded mr-2'
        >
          Live Demo
        </Link>
        <Link
          href={project.sourceCodeUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-2 rounded'
        >
          Source Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
