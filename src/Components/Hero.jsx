import React from 'react';
import shani from '../assets/shani.jpg';  // ✅ fixed import

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[120px] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col md:order-1 order-2 md:flex-row items-center justify-between gap-12">
            <div className='order-2 sm:order-1 opacity-0 animate-fadeInLeft'>
              <h1
                className=" text-center sm:text-start text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4"
                style={{ opacity: 1, transform: "none" }}
              >
                Hello, I'm{" "}
                <br />
                <span className=" text-center sm:text-start bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                  Zeeshan Shabir
                </span>
              </h1>
              <h2 className="text-red-300 text-[22px] pb-2 text-center sm:text-start">MERN Stack Developer</h2>
              <p className="max-w-lg text-center sm:text-justify text-red-200">
              As a MERN Stack Developer, I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I create dynamic, scalable solutions with a focus on responsive front-end design and efficient back-end development. My goal is to deliver seamless user experiences and optimize web performance.
              </p>
              <div className='flex flex-row gap-5 py-6 justify-center md:justify-start'>
                <button className='px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2" tabindex="0"'><svg className='mr-[6px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> Contact Me</button>
                <button className= 'px-6 text-red-200 py-3 border border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:border-primary-light dark:hover:text-primary-light rounded-lg transition-all duration-300 flex items-center gap-2'><svg className='pr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> Resume</button>
              </div>
              <div className="social-icon-link">
              <div className="mt-8 flex gap-4 justify-center md:justify-start" style={{ opacity: 1, transform: 'none' }}>
      <a
        href="https://github.com/zeeshanshabir07"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border text-white rounded-full bg-surface-light dark:bg-surface-dark hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/zeeshan700/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border text-white rounded-full bg-surface-light dark:bg-surface-dark hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border text-white rounded-full bg-surface-light dark:bg-surface-dark hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
        style={{ transform: 'none' }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </a>
    </div>
              </div>
            </div>

            <div className=' order-1 sm:order-2 opacity-0 animate-fadeInRight '>
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl animate-pulse"></div>
                <div
                  className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-primary to-secondary"
                  style={{ boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.318)" }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-background-dark p-1">
                    <img
                      src={shani}
                      alt="Zeeshan Shabir"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
