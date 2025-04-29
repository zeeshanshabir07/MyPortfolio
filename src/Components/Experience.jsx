import React from "react";
import { Briefcase } from "lucide-react";
import fiverLogo from '../assets/fiver.png';
import upworkLogo from '../assets/upwork.png';
import comsatsLogo from '../assets/comsats.png';

const experiences = [
  {
    title: "Lab Engineer",
    company: "Comsats University Islamabad",
    duration: "Jan 2024 - July 2024",
    description: "Building scalable MERN stack applications.",
    logo: comsatsLogo,
  },
  {
    title: "Fullstack Developer",
    company: "Upwork",
    duration: "Jan 2025 - Present",
    description: "Building scalable MERN stack applications.",
    logo: upworkLogo,
  },
  {
    title: "Frontend Developer",
    company: "Fiverr",
    duration: "Feb 2021 - 2024",
    description: "Building scalable MERN stack applications.",
    logo: fiverLogo,
  },
];

const Experience = () => {
  return (
    <div id="experience" className=" py-8 px-16 sm:px-6 md:px-12 bg-gray-800 text-white">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <p className="mx-auto text-[18px] text-center text-red-300 max-w-2xl mb-12">
        My professional journey and key accomplishments in the tech industry.
      </p>
<div className="relative overflow-hidden py-20">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-pink-500"></div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-20 max-w-4xl mx-auto px-4 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Experience Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-purple-500 rounded-full p-2">
              <Briefcase className="h-6 w-6 text-purple-400" />
            </div>

            {/* Experience Card */}
            <div
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0
                  ? "md:justify-start md:pr-16"
                  : "md:justify-end md:pl-16"
              }`}
            >
              <div className="md:w-1/3 bg-gray-600 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <img src={exp.logo} alt="logo" className="w-10 h-10 object-contain" />
                  <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                </div>
                <h4 className="text-lg font-semibold">{exp.company}</h4>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="mt-4 text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Experience;
