import React, { useState } from 'react';
import SkillsData from '../jsonData/SkillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredSkills = activeCategory === 'All'
    ? SkillsData : SkillsData.filter((category) => category.category === activeCategory);

  return (
    <>
      <div id="skills" className="py-20  px-10  sm:px-6 flex justify-center items-center flex-col relative ">
        <div className="text-center mb-6">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <p className=' mx-auto text-[18px] text-center text-red-300 max-w-2xl'>
          A curated collection of my technical skills and proficiencies developed through education, personal projects, and hands-on experience.
        </p>
        <div className="flex flex-wrap justify-center gap-3 my-12">
          {/* All Skills Button */}
          <button
            onClick={() => setActiveCategory('All')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-primary text-white shadow-md shadow-primary/20"
          >
            All Skills
          </button>

          {/* Languages Button */}
          <button
            onClick={() => setActiveCategory('Languages')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Languages
          </button>

          {/* Frontend Button */}
          <button
            onClick={() => setActiveCategory('Frontend')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Frontend
          </button>

          {/* Backend Button */}
          <button
            onClick={() => setActiveCategory('Backend')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Backend
          </button>

          {/* DevOps & Tools Button */}
          <button
            onClick={() => setActiveCategory('DevOps&Tools')}
            className="px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            DevOps & Tools
          </button>
        </div>

        {/* Skills display section */}
        <div className="flex justify-center flex-wrap gap-6 ">
          {filteredSkills.map((category, index) =>
            category.skills.map((skill, skillIndex) => (
              <div
                key={`${index}-${skillIndex}`}
                className="w-full sm:w-72 text-white hover:rotate-3 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4 flex-grow-1 ">
                  <div className="text-3xl text-primary mr-3">
                    {/* Add corresponding icons for each skill */}
                    <i className={`devicon-${skill.name.toLowerCase()}-plain colored`}></i>
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-white dark:text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className=' bg-gray-800 rounded-lg mx-2 sm:mx-10 my-10 py-10'>
        <h3 class="text-2xl font-semibold mb-6 text-white text-center ">Additional Skills &amp; Methodologies</h3>
         <div className='flex flex-wrap justify-center gap-3'>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> Project Management</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> Problem Solving</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> Agile Methodology</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> Team Collaboration</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> RESTful APIs</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}>Technical Documentation</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> System Design</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> Code Review</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}>Test-Driven Development</span>
         <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200" style={{   opacity: 1, backgroundColor: "rgb(55, 65, 81)", color: "rgb(229, 231, 235)", transform: "none"   }}> Scrum
         </span>
         </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
