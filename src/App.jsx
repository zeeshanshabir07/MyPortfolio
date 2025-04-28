import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Project from "./Components/Project"
import Education from "./Components/Education";
import Contact from "./Components/Contact";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1 second animation
  }, []);

  return (
  <div className="min-h-screen  bg-[#111827] ">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Project/>
    <Education/>
    <Contact/>
  </div>
  );
}

export default App;
