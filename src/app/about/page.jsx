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
import { FaNode, FaLinux } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';

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
    desc: 'Strong understanding of linux operating system with knowledge of bash scripting, command line proficiency, linux networking, package management etc...',
  },

  {
    title: '🔒Security',
    desc: 'Awareness of web application security principles and best practices to protect against common vulnerabilities',
  },
  {
    title: '🤖 Effective use of AI',
    desc: 'Understainding of AI and knowledge of using AI powered tools to execute tasks faster',
  },

  {
    title: '📱 Responsive Design',
    desc: 'Ability to create websites that adapt to different screen sizes and devices',
  },
];

const technologies = [
  {
    name: 'MongoDB',
    emoji: <BiLogoMongodb />,
    desc: 'A NoSQL database that stores data in flexible JSON-like documents, commonly used for scalable and dynamic applications',
    color: 'text-green-500',
  },
  {
    name: 'Express.js',
    emoji: <SiExpress />,
    desc: 'A popular Node.js web framework that simplifies server-side development and enables building robust APIs and web applications',
  },
  {
    name: 'React',
    emoji: <BiLogoReact />,
    desc: 'A JavaScript library for building interactive user interfaces, widely used for creating fast and reusable UI components',
    color: 'text-blue-500',
  },
  {
    name: 'NextJs',
    emoji: <TbBrandNextjs />,
    desc: 'A framework for server-rendered React applications that provides features like static site generation and server-side rendering',
  },
  {
    name: 'Node.js',
    emoji: <FaNode />,
    desc: 'An open-source, event-driven runtime environment that allows executing JavaScript code on the server-side, ideal for building scalable network applications',
    color: 'text-green-500',
  },
  {
    name: 'Git',
    emoji: <BsGit />,
    desc: 'A distributed version control system for tracking changes in source code, facilitating collaboration and code management in software projects',
    color: 'text-orange-500',
  },
  {
    name: 'JavaScript',
    emoji: <BiLogoJavascript />,
    desc: 'A high-level, interpreted programming language that powers dynamic behavior and interactivity on web pages and applications',
    color: 'text-yellow-500',
  },
  {
    name: 'CSS',
    emoji: <BiLogoCss3 />,
    desc: 'Cascading Style Sheets, used to control the presentation and layout of HTML elements, enhancing the visual appearance of web pages',
    color: 'text-yellow-500',
  },
  {
    name: 'HTML',
    emoji: <BiLogoHtml5 />,
    desc: 'Hypertext Markup Language, the standard language for creating and structuring web content, forming the foundation of web pages',
    color: 'text-orange-500',
  },
  {
    name: 'Neovim',
    emoji: <SiNeovim />,
    desc: 'A modern text editor and improved version of Vim, designed for efficient and extensible code editing and development workflows',
    color: 'text-green-500',
  },
  {
    name: 'Go (Golang)',
    emoji: <BiLogoGoLang />,
    desc: 'A statically typed, compiled language known for its simplicity, performance, and concurrency support, suitable for system-level programming',
    color: 'text-blue-500',
  },
  {
    name: 'Linux',
    emoji: <FaLinux />,
    desc: 'An open-source operating system kernel widely used in various distributions, providing a stable and secure environment for software development and deployment',
  },

  // Add more technologies here as needed
];

export const metadata = {
  title: 'About Me - Roshan Paudel 🧒',
  description:
    'Hi, I am Roshan Paudel, a self-taught developer with a passion for coding and the MERN stack technology. Learn about my skills in quick learning, problem-solving, version control, troubleshooting, deployment, API integration, Linux, security, and effective use of Artificial Intelligence.',
  keywords:
    'Roshan Paudel, self-taught developer, MERN stack, web development, quick learning, problem solving, version control, troubleshooting, deployment, API integration, Linux, security, Artificial Intelligence',
};

const AboutPage = () => {
  return (
    <div className='p-10 pt-28 min-h-screen flex items-start justify-center'>
      <div className='max-w-xl'>
        <h1 className='text-3xl font-semibold mb-4'>About Me 🧒</h1>
        <p>
          Hi, I am Roshan Paudel, and I've been on a journey to learn and master
          the MERN stack technology. While I didn't have a formal computer
          science background, I was driven by a deep curiosity and passion for
          coding, which led me to explore the world of web development.
          <br />
          Throughout my learning process, I've encountered challenges and
          obstacles, but I've remained committed to improving my skills. Over
          the past 1.5 years, I've gained knowledge in HTML, CSS, HTTP, MongoDB,
          Express.js, ReactJs, NextJs, and much more, but I still have much to
          learn. I've spent countless hours exploring computer science concepts
          through online resources and tutorials. I'm grateful for the support
          and guidance I've received from the developer community, which has
          been instrumental in my progress.
        </p>
        <div>
          <h2 className='text-2xl font-semibold my-4 mt-8 text-center'>
            Skills That I have Aquired 🎯💪
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {skills.map((s) => (
              <div className='card-with-shadow shadow-pop p-4 rounded-md shadow-md flex item center justify-center flex-col gap-2'>
                <span className='text-lg font-semibold text-center'>
                  {s.title}
                </span>
                <span className='desc text-sm text-center text-gray-400'>
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold my-4 mb-8 text-center'>
            Tecnnology Stacks 🛠️
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className='card-with-shadow shadow-pop rounded-md py-4 p-2 flex flex-col items-center justify-center cursor-pointer'
              >
                <span className={`text-6xl ${tech.color ? tech.color : ''}`}>
                  {tech.emoji}
                </span>
                <span className='text-lg font-semibold mt-2'>{tech.name}</span>
                <p className='desc text-sm text-center text-gray-400 p-2'>
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
