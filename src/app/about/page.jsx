import React from 'react';
import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoGoLang,
} from 'react-icons/bi';
import { SiExpress, SiNeovim } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';

const skills = [
  {
    title: '⚡Quick Learning',
    desc: 'Effective self-learning skills, including research, exploring documentation, and staying updated with the latest trends and technologies in web development.',
  },
  {
    title: '🎯 Problem Solving',
    desc: 'The ability to approach challenges systematically, analyze issues, and find efficient solutions to problems in programming.',
  },
  {
    title: ' 📚 Version Control',
    desc: 'Proficiency in using version control systems like Git, enabling collaboration and managing code changes effectively',
  },

  {
    title: '🧑‍💻 Troubleshooting and Debugging',
    desc: 'Skill in identifying and resolving errors, bugs, and performance issues in the code.',
  },
  {
    title: '🚀 Deployment and Hosting',
    desc: 'Familiarity with deploying web applications to servers and cloud platforms for 📢public access.',
  },
  {
    title: '🔌 API Integration',
    desc: 'Strong knowledge in integrating third-party APIs and services to enhance the functionality of web applications.',
  },

  {
    title: '🐧 Linux',
    desc: 'Strong understanding of linux operating system with knowledge of bash scripting, command line proficiency, linux networking, package management, different distributions & monitoring ',
  },

  {
    title: '🔒Security',
    desc: 'Awareness of web application security principles and best practices to protect against common vulnerabilities',
  },
  {
    title: '🤖 Effective use of Artificial Intellegence',
    desc: 'Understainding of AI and knowledge of using AI powered tools to execute tasks faster',
  },
];

const technologies = [
  { name: 'MongoDB', emoji: <BiLogoMongodb /> },
  { name: 'Express.js', emoji: <SiExpress /> },
  { name: 'React', emoji: <BiLogoReact /> },
  { name: 'Node.js', emoji: <FaNode /> },
  { name: 'Git', emoji: <BsGit /> },
  { name: 'JavaScript', emoji: <BiLogoJavascript /> },
  { name: 'CSS', emoji: <BiLogoCss3 /> },
  { name: 'HTML', emoji: <BiLogoHtml5 /> },
  { name: 'Neovim', emoji: <SiNeovim /> },
  { name: 'Go (Golang)', emoji: <BiLogoGoLang /> },
  // Add more technologies here as needed
];

const AboutPage = () => {
  return (
    <div className='p-10 pt-28 min-h-screen flex items-start justify-center'>
      <div className='max-w-xl'>
        <h1 className='text-3xl font-semibold mb-4'>About Me 🧒</h1>
        <p>
          Hi, I am Roshan Paudel, and I've been on a journey as a self-taught
          developer to learn and master the MERN stack technology. While I
          didn't have a formal computer science background, I was driven by a
          deep curiosity and passion for coding, which led me to explore the
          world of web development.
          <br />
          Throughout my learning process, I've encountered challenges and
          obstacles, but I've remained committed to improving my skills. Over
          the past 1.5 years, I've gained knowledge in MongoDB, Express.js,
          Angular, and Node.js, but I still have much to learn. I've spent
          countless hours exploring computer science concepts through online
          resources and tutorials. I'm grateful for the support and guidance
          I've received from the developer community, which has been
          instrumental in my progress.
        </p>
        <div>
          <h2 className='text-2xl font-semibold my-4'>
            Skills That I have Aquired 🎯💪
          </h2>
          {skills.map((s) => (
            <ul className='pl-4'>
              <li className='card-with-shadow p-4 rounded-md border border-gray-300 shadow-md list-disc my-4'>
                <span className='text-lg font-semibold'>{s.title} : </span>
                <span className='text-sm'>{s.desc}</span>
              </li>
            </ul>
          ))}
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold my-4'>
            Tecnnology Stacks Under My Belt 💻 🛠️
          </h2>
          <div className='max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className='border card-with-shadow  border-gray-300 rounded-md shadow-lg py-4 p-2 flex items-center justify-center cursor-pointer'
              >
                <span className='text-2xl'>{tech.emoji}</span>
                <span className='text-lg font-semibold'>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
