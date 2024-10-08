
/*import './App.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import About from './Componets/About';
import Skills from './Componets/Skills';
import ContactMe from './Componets/ContactMe';
import ProjectList from './Componets/ProjectList';
import SkillList from './Componets/SkillList';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


  

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>
   <Navbar/>
    <Home/>
    <About/>
    <SkillList/>
    <ProjectList/>
    <ContactMe/>
    
   
   </>
  );
}

export default App;
*/
import React, { useState, useRef, useEffect } from "react";
import Navbar from './Componets/Navbar'; // Correct path based on earlier info
import Home from './Componets/Home';
import About from './Componets/About';
import SkillList from './Componets/SkillList';
import ProjectList from './Componets/ProjectList';
import ContactMe from './Componets/ContactMe';

const App = () => {
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillListRef = useRef(null);
  const projectListRef = useRef(null);
  const contactMeRef = useRef(null);

  
  const [currentSection, setCurrentSection] = useState(0);

  
  const sections = [homeRef, aboutRef, skillListRef, projectListRef, contactMeRef];

  
  const handleScroll = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = sections[currentSection + 1];
      nextSection.current.scrollIntoView({ behavior: "smooth" });
    } else {
      
      sections[0].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex(
            (section) => section.current === entry.target
          );
          setCurrentSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    
    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, [sections]);

  return (
    <>
      <Navbar />
      
      <div ref={homeRef}>
        <Home />
      </div>

      
      <div ref={aboutRef}>
        <About />
      </div>

      
      <div ref={skillListRef}>
        <SkillList />
      </div>

      
      <div ref={projectListRef}>
        <ProjectList />
      </div>

      
      <div ref={contactMeRef}>
        <ContactMe />
      </div>

      
      <button
        onClick={handleScroll}
        className="fixed bottom-5 right-5 bg-[#F39C12] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#D68910] transition-all"
      >
        {currentSection === sections.length - 1 ? "Go to Top" : "Next"}
      </button>
    </>
  );
};

export default App;
