import React from 'react'
// import projectData from '../jsonData/ProjectData'
import shani from '../assets/shani.jpg'
import tmsPro from '../assets/tmsPro.jpg'
import futurecoder from '../assets/futurecoder.JPG'
import { MdSchool } from 'react-icons/md';
const Project = () => {
  return (
  <div id="projects"  className="py-20 container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <p className=' mx-auto text-[18px] text-center text-red-300 max-w-2xl'>
        A showcase of my technical projects and applications, demonstrating my skills and expertise in various technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-3 my-12">
        
          <button
            onClick={() => setActiveCategory('All')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-primary text-white shadow-md shadow-primary/20"
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveCategory('Languages')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-[#1F2937] text-white dark:text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-700"
          >
            Frontend Project
          </button>
          <button
            onClick={() => setActiveCategory('Frontend')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300  bg-[#1F2937] text-white dark:text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-700"
          >
            Backend Project
          </button>
          <button
            onClick={() => setActiveCategory('Backend')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300  bg-[#1F2937] text-white dark:text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-700"
          >
            Full MERN Stack Projects
          </button>
          <button
            onClick={() => setActiveCategory('DevOps&Tools')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300  bg-[#1F2937] text-white dark:text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-700"
          >
            DevOps & Tools
          </button>
        </div>
        <div className="project-container flex flex-row justify-center items-center gap-6 flex-wrap">
  <div className="w-80 rounded-lg flex flex-col shadow-lg bg-gray-700 h-full">
    <div
      className="relative w-full h-48 bg-cover bg-center rounded-t-lg transition-transform duration-300 ease-in-out transform group"
      style={{ backgroundImage: `url(${futurecoder})` }}
    >
      <h2 className="absolute bottom-4 left-4 text-white text-[18px] font-medium">
       futureCoder.com
      </h2>
    </div>
    <div className="p-4 flex flex-col justify-between h-full">
      <p className="text-gray-400 text-[16px] text-justify">
        FutureCoders.com is a web platform where users apply for internships and job postings.
      Admins can view applications, update their status (selected/rejected), and manage notifications.
      The site includes user authentication with login and logout functionality.
      <a href="full-description.html" className="text-blue-500 hover:underline ml-1">Read More</a>
      </p>
      <div className="tags flex flex-wrap gap-2 mt-2">
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">HTML</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">CSS</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">Tailwind</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">JavaScript</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">ReactJS</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">NodeJS</span>
      </div>
    </div>
  </div>

  <div className="w-80 rounded-lg flex flex-col shadow-lg bg-gray-700 h-full">
    <div
      className="relative w-full h-48 bg-cover bg-center rounded-t-lg transition-transform duration-300 ease-in-out transform group"
      style={{ backgroundImage: `url(${tmsPro})` }}
    >
      <h2 className="absolute bottom-4 left-4 text-white text-[18px] font-medium">
        Taylor Management System (TMS)
      </h2>
    </div>
    <div className="p-4 flex flex-col justify-between h-full">
      <p className="text-gray-400 text-[16px] text-justify">
        The Taylor Management System (TMS) is designed for tailors to efficiently manage their customer orders. 
        The system allows tailors to add customer details, track customer orders, and monitor the r 
        Tailors can view the number of completed orders, pending deliveries.
        <a href="full-description.html" className="text-blue-500 hover:underline ml-1">Read More</a>
      </p>
      <div className="tags flex flex-wrap gap-2 mt-2">
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">HTML</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">CSS</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">Tailwind</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">JavaScript</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">ReactJS</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">NodeJS</span>
      </div>
    </div>
  </div>
  <div className="w-80 rounded-lg flex flex-col shadow-lg bg-gray-700 h-full">
    <div
      className="relative w-full h-48 bg-cover bg-center rounded-t-lg transition-transform duration-300 ease-in-out transform group"
      style={{ backgroundImage: `url(${futurecoder})` }}
    >
      <h2 className="absolute bottom-4 left-4 text-white text-[18px] font-medium">
        Brand Page 
      </h2>
    </div>
    <div className="p-4 flex flex-col justify-between h-full">
      <p className="text-gray-400 text-[16px] text-justify">
        FutureCoders.com is a web platform where users apply for internships and job postings.
      Admins can view applications, update their status (selected/rejected), and manage notifications.
      The site includes user authentication with login and logout functionality.
      <a href="full-description.html" className="text-blue-500 hover:underline ml-1">Read More</a>
      </p>
      <div className="tags flex flex-wrap gap-2 mt-2">
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">HTML</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">CSS</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">Tailwind</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">JavaScript</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">ReactJS</span>
        <span className="px-2 py-1 rounded-full bg-[#1F2937] text-white text-[14px] hover:bg-gray-700">NodeJS</span>
      </div>
    </div>
  </div>

  
</div>






        </div>
      
  )
}

export default Project