import React from 'react'
import { MdSchool } from 'react-icons/md';
import upworkLogo from '../assets/upwork.png';
import comsatsLogo from '../assets/comsats.png';
const educationData = [
    {
      uniName: "Comsats University Islamabad",
      Degree: "Master in Computer Science",
      duration: "Jan 2020 - July 2022",
      description: "Completed a comprehensive program emphasizing both theoretical and practical aspects of computer science. Key areas of study included Object-Oriented Programming (OOP) concepts, data structures, advanced web development, and software testing methodologies. Engaged in projects and coursework that enhanced problem-solving skills and prepared for real-world software development challenges.",
      logo: comsatsLogo,
    },
    {
        uniName: "Comsats Virtual University",
        Degree: "Full Stack Software Development Course",
      duration: "Jan 2017 - 2019",
      description: "Completed a comprehensive course focusing on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). The curriculum encompassed key areas such as Object-Oriented Programming (OOP) concepts, data structures, advanced web development techniques, and software testing methodologies. Engaged in practical projects, including building a basic blog application, creating a task management system, and developing an e-commerce website, which enhanced problem-solving skills and prepared for real-world software development challenges.​",
      logo: upworkLogo,
    },
  
  ];
  
  const Education = () => {
    return (
      <div id="education" className=" py-8 px-16 sm:px-6 md:px-12 bg-gray-800 text-white">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Journey </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
        </div>
  
        <p className="mx-auto px-4 text-[18px] text-center text-red-300 max-w-2xl mb-12">
        My academic background and educational qualifications that have shaped my skills and knowledge.</p>
  <div className="relative overflow-hidden py-20">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-pink-500"></div>

        <div className="flex flex-col gap-20 max-w-4xl mx-auto px-4 relative">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-purple-500 rounded-full p-2">
                <MdSchool className="h-6 w-6 text-purple-400" />
              </div>
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start md:pr-16"
                    : "md:justify-end md:pl-16"
                }`}
              >
                <div className="md:w-1/2 bg-gray-600 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={edu.logo} alt="logo" className="w-10 h-10 object-contain sm:text-start text-center" />
                    <h3 className="text-2xl font-bold text-purple-400 sm:text-start text-center">{edu.uniName}</h3>
                  </div>
                  <h4 className="text-lg font-semibold sm:text-start text-center">{edu.Degree}</h4>
                  <p className="text-sm text-gray-400 sm:text-start text-center">{edu.duration}</p>
                  <p className="mt-4 text-gray-300  sm:text-start text-center rounded-md shadow-md p-2">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default Education;
  