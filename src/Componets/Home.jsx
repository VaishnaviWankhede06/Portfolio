/*

import React, { useEffect, useRef } from "react";
import logo from './vaishu.jpg';
import Typed from "typed.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to My Portfolio", "My Name is Vaishnavi Wankhede", "I am a Frontend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(typedRef.current, options);

    AOS.init({ duration: 1200 }); // AOS Initialization

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#2C2C3A] pb-10 px-5 dark:bg-customPurple">
      
      <div
        className="relative group mb-10"
        data-aos="fade-up"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg ">
          <img className="w-full h-full object-fill" src={logo} alt="Vaishnavi Wankhede" />
        </div>
      </div>

      <div
        className="text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2
          className="text-4xl font-semibold text-[#BDC3C7] mb-5"
          ref={typedRef}
        ></h2>
        <p className="text-lg text-[#ECF0F1]">
          I am passionate about creating intuitive and dynamic user interfaces.
        </p>
      </div>

      <div
        className="flex justify-center space-x-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a href="" download="resume.pdf">
          <button className="bg-[#004080] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#003366] transition-all duration-300">
            Download Resume
          </button>
        </a>
        <a href="">
          <button className="bg-[#6a0dad] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#5a0080] transition-all duration-300">
            Contact Info
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;*/

import React, { useEffect, useRef } from "react";
import logo from './vaishu.jpg';
import Typed from "typed.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to My Portfolio", "My Name is Vaishnavi Wankhede", "I am a Frontend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(typedRef.current, options);

    AOS.init({ duration: 1200 }); // AOS Initialization

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-lightBg dark:bg-darkBg pb-10 px-5">
      
      <div
        className="relative group mb-10"
        data-aos="fade-up"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img className="w-full h-full object-fill" src={logo} alt="Vaishnavi Wankhede" />
        </div>
      </div>

      <div
        className="text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2
          className="text-4xl font-semibold text-lightText dark:text-darkText mb-5"
          ref={typedRef}
        ></h2>
        <p className="text-lg text-lightText dark:text-darkSecondary">
          I am passionate about creating intuitive and dynamic user interfaces.
        </p>
      </div>

      <div
        className="flex justify-center space-x-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a href="" download="resume.pdf">
          <button className="bg-lightSecondary dark:bg-lightSecondary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-lightPrimary dark:hover:bg-darkSecondaryHover transition-all duration-300">
            Download Resume
          </button>
        </a>
        <a href="">
          <button className="bg-lightPrimary dark:bg-darkPrimary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-lightSecondary dark:hover:bg-darkSecondaryHover transition-all duration-300">
            Contact Info
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

