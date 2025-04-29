import React from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
const Contact = () => {
  return (
    <div>  <div id="contact" className="py-8 px-16 sm:px-6 md:px-12 text-white">
    {/* Heading */}
    <div className="text-center mb-4 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
    </div>
    <p className="mx-auto  text-[18px] text-center text-red-300 max-w-2xl mb-12">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
    <div className='flex flex-col md:flex-row  justify-around w-full'>
        <div className='contact-info w-full md:w-1/2 p-4'>
         <h1 className='text-2xl text-white font-medium py-8'>Contact Information</h1>
    <div className='flex flex-col gap-5'>
    <div className='flex gap-4'>
            <div className='bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-primary-light'><MdEmail size={25} /></div>
            <div className='flex flex-col'>
                <p className='text-white text-lg font-medium'>Email</p>
                <p className='text-gray-400 font-medium'>zeeshanofficial07@gmail.com</p>
            </div>
         </div>
         <div className='flex gap-4'>
            <div className='bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-primary-light'><MdPhone size={25} /></div>
            <div className='flex flex-col'>
                <p className='text-white text-lg font-medium'>Phone</p>
                <p className='text-gray-400 font-medium'>923000021011</p>
            </div>
         </div>
         <div className='flex gap-4'>
            <div className='bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-primary-light'><MdLocationOn size={25} /></div>
            <div className='flex flex-col'>
                <p className='text-white text-lg font-medium'>Location</p>
                <p className='text-gray-400 font-medium'>A block Club Road, Vehari.</p>
            </div>
            <div>      
            </div>
         </div>
         <div className="social-icon-link pt-5">
         <h1 className='text-2xl text-white font-medium text-center sm:text-start'>Connect With Me</h1>
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
        </div>
        <div className='Contact_form w-full md:w-1/2 p-4'>
 
  <div className='w-full bg-gray-800 dark:bg-gray-800 rounded-xl shadow-xl p-8'>
  <h3 className="text-2xl font-semibold mb-6 text-start">Send Me a Message</h3>
    <form className="">
      {/* Name */}
      <label htmlFor="name" className="block text-sm font-medium text-gray-400 dark:text-gray-300 py-1">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 mb-3"
      />

      {/* Email */}
      <label htmlFor="email" className="block text-sm font-medium text-gray-400 dark:text-gray-300 py-1">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your email"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 mb-3"
      />

      {/* Subject */}
      <label htmlFor="subject" className="block text-sm font-medium text-gray-400 dark:text-gray-300 py-1">
        Subject
      </label>
      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="What is this regarding?"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 mb-3"
      />

      {/* Message */}
      <label htmlFor="message" className="block text-sm font-medium text-gray-400 dark:text-gray-300 py-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Your message"
        className="w-full px-4 py-3 rounded-lg bg-gray-700 dark:bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 mb-6"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

        <div>

        </div>
    </div>
  
    <div className='flex flex-col sm:flex-row items-center justify-between mt-10  border-t border-gray-700  py-6'>
        <p className='text-gray-400 text-[14px]'>© 2025 ZEESHAN SHABIR. All rights reserved.</p>
        <p  className='text-gray-400 text-[14px]'>Designed & Built with ♥ by Zeeshan S.</p>
    </div>
    </div>
    </div>
  )
}

export default Contact