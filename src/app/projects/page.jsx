import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const imgurl =
  'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of Project 1...',
    imageUrl: imgurl, // Replace with the URL of the image for Project 1
    demoUrl: 'https://example.com/project1-demo', // Replace with the URL of the live demo for Project 1
    sourceCodeUrl: 'https://github.com/your-username/project1', // Replace with the URL of the source code repository for Project 1
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project 2...',
    imageUrl: imgurl, // Replace with the URL of the image for Project 2
    demoUrl: 'https://example.com/project2-demo', // Replace with the URL of the live demo for Project 2
    sourceCodeUrl: 'https://github.com/your-username/project2', // Replace with the URL of the source code repository for Project 2
  },

  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project 2...',
    imageUrl: imgurl, // Replace with the URL of the image for Project 2
    demoUrl: 'https://example.com/project2-demo', // Replace with the URL of the live demo for Project 2
    sourceCodeUrl: 'https://github.com/your-username/project2', // Replace with the URL of the source code repository for Project 2
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project 2...',
    imageUrl: imgurl, // Replace with the URL of the image for Project 2
    demoUrl: 'https://example.com/project2-demo', // Replace with the URL of the live demo for Project 2
    sourceCodeUrl: 'https://github.com/your-username/project2', // Replace with the URL of the source code repository for Project 2
  },
  // Add more projects as needed
];

const ShowcasePage = () => {
  return (
    <div className='p-10 pt-28 min-h-screen flex flex-wrap items-start justify-center'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-8'>
          🚀 Projects I have worked on !
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
