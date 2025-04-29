import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-8 px-16 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left side */}
        <div className="w-full lg:w-5/12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-lg transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-gray-600 dark:bg-gray-800 rounded-lg transform -rotate-3 scale-105"></div>
            <div className="relative bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Who I Am
              </h3>
              <p className="text-gray-200 font-serif dark:text-gray-300 leading-relaxed mb-4">
              As a web developer with three years of experience, I hold a Master's in Computer Science (MCS) and possess keen knowledge of data structures and algorithms. My passion for coding and problem-solving through development drives me to constantly enhance my skills. I am excited to collaborate with talented teams, learn from others, and continue growing in the ever-evolving field of web development.
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-300">
                <p className="font-medium text-gray-100 dark:text-gray-200">
                Currently pursuing my passion for Web Enigneering in the 10 network, working toward a Full Stack Software Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-7/12">
          <h3 className="text-xl font-semibold mb-6 text-white text-center lg:text-left">My Qualities</h3>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quality 1 */}
            <QualityCard
              icon="code"
              title="Problem Solver"
              description="Approaching complex coding challenges with analytical thinking and persistence."
            />
            {/* Quality 2 */}
            <QualityCard
              icon="book-open"
              title="Continuous Learner"
              description="Passionate about staying updated with the latest technologies and best practices."
            />
            {/* Quality 3 */}
            <QualityCard
              icon="brain-circuit"
              title="Creative Thinker"
              description="Finding innovative solutions by thinking outside the box."
            />
            {/* Quality 4 */}
            <QualityCard
              icon="graduation-cap"
              title="Academic Focus"
              description="Currently pursuing my passion for Web Enigneering in the 10 network, working toward a Full Stack Software Engineering.."
            />
          </div>

          <div className="mt-8 text-center lg:text-left">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am <span className="font-semibold text-primary dark:text-primary-light">passionate about solving problems</span> through code and building applications that provide genuine value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const QualityCard = ({ icon, title, description }) => {
  const icons = {
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" className="lucide lucide-code w-6 h-6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    "book-open": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" className="lucide lucide-book-open w-6 h-6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    "brain-circuit": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" className="lucide lucide-brain-circuit w-6 h-6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
        <path d="M12 8h8" />
        <path d="M16 8V5a2 2 0 0 1 2-2" />
        <circle cx="16" cy="13" r=".5" />
        <circle cx="18" cy="3" r=".5" />
        <circle cx="20" cy="21" r=".5" />
        <circle cx="20" cy="8" r=".5" />
      </svg>
    ),
    "graduation-cap": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" className="lucide lucide-graduation-cap w-6 h-6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
  };

  return (
    <div className="bg-gray-600 text-center sm:text-start text-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="mb-4 inline-flex p-3 bg-primary/10 dark:bg-primary/20 rounded-lg text-center sm:text-start text-primary dark:text-primary-light group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
        {icons[icon]}
      </div>
      <h4 className="text-xl font-semibold text-center sm:text-start mb-2">{title}</h4>
      <p className="text-gray-200 dark:text-gray-300 text-center sm:text-start">{description}</p>
    </div>
  );
};

export default About;
