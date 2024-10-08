/*
import React, { useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1s duration
  }, []);

  return (
    <div id="about" className="pb-16 px-4 bg-[#2C2C3A]">
      <div className="text-center text-white" data-aos="fade-down">
        <h6 className="text-lg mb-2 text-[#F39C12]">Get to Know More</h6>
        <h2 className="text-5xl font-bold text-[#BDC3C7] mb-6">About Me</h2>
        <p className="text-xl text-[#BDC3C7] mb-6">
          Hi, I'm Vaishnavi Wankhede, a passionate Frontend Developer with a
          strong focus on crafting beautiful and responsive user interfaces.
          I am seeking practical experience in the IT industry to develop
          technical knowledge and skills, acing development and contributing
          to innovative projects while collaborating with diverse teams.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-[#bac0c4] shadow-lg rounded-lg p-6" data-aos="fade-right">
          <h1 className="text-3xl font-bold text-[#2C2C3A] mb-6">Education</h1>
          <div className="space-y-4">
            <div className="bg-[#c7cacc] p-4 rounded-lg shadow-md">
              <p className="text-lg text-[#2C2C3A]">
                B. Tech in Computer Science and Engineering, (DBATU) CGPA - 7.5/10
              </p>
              <p className="text-md text-[#2C2C3A]">
                Matoshri Pratishthan Group of Institution, Nanded.
              </p>
              <p className="text-sm text-[#2C2C3A] text-right">2021 - 2024</p>
            </div>
            <div className="bg-[#c7cacc] p-4 rounded-lg shadow-md">
              <p className="text-lg text-[#2C2C3A]">
                POLYTECHNIC (Computer Technology), Percentage- 84.51%
              </p>
              <p className="text-md text-[#2C2C3A]">
                Government Polytechnic Bramhapuri, Chandrapur.
              </p>
              <p className="text-sm text-[#2C2C3A] text-right">2018 - 2021</p>
            </div>
            <div className="bg-[#c7cacc] p-4 rounded-lg shadow-md">
              <p className="text-lg text-[#2C2C3A]">Class X (SSC) Percentage- 80%</p>
              <p className="text-md text-[#2C2C3A]">
                Nehru Vidyalaya Chimur, Chandrapur.
              </p>
              <p className="text-sm text-[#2C2C3A] text-right">2027 - 2018</p>
            </div>
          </div>
        </div>

        <div className="bg-[#bac0c4] shadow-lg rounded-lg p-6" data-aos="fade-left">
          <h3 className="text-3xl font-bold text-[#2C2C3A] mb-6">Personal Details</h3>
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <AiTwotoneStar className="text-[#6a0dad] me-3" />
              <p className="text-lg text-[#2C2C3A]">Name: Vaishnavi Wankhede</p>
            </div>
            <div className="flex items-start mb-4">
              <AiTwotoneStar className="text-[#6a0dad] me-3" />
              <p className="text-lg text-[#2C2C3A]">
                Permanent Address: At Shedegaon, Ta. Chimur, Dist. Chandrapur.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <AiTwotoneStar className="text-[#6a0dad] me-3" />
              <p className="text-lg text-[#2C2C3A]">
                Current Address: Deccan Gymkhana, Shivajinagar, Pune.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <AiTwotoneStar className="text-[#6a0dad] me-3" />
              <p className="text-lg text-[#2C2C3A]">Date of Birth: 6-10-2002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; */


import React, { useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1s duration
  }, []);

  return (
    <div id="about" className="pb-16 px-4 bg-[#f5f5f5] dark:bg-[#2C2C3A]">
      <div className="text-center text-[#2C2C3A] dark:text-white" data-aos="fade-down">
        <h6 className="text-lg mb-2 text-[#6a0dad] dark:text-[#F39C12]">Get to Know More</h6>
        <h2 className="text-5xl font-bold text-[#333333] dark:text-[#BDC3C7] mb-6">About Me</h2>
        <p className="text-xl text-[#333333] dark:text-[#BDC3C7] mb-6">
          Hi, I'm Vaishnavi Wankhede, a passionate Frontend Developer with a
          strong focus on crafting beautiful and responsive user interfaces.
          I am seeking practical experience in the IT industry to develop
          technical knowledge and skills, acing development and contributing
          to innovative projects while collaborating with diverse teams.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-[#bac0c4] dark:bg-[#333333] shadow-lg rounded-lg p-6" data-aos="fade-right">
          <h1 className="text-3xl font-bold text-[#2C2C3A] dark:text-[#BDC3C7] mb-6">Education</h1>
          <div className="space-y-4">
            <div className="bg-[#c7cacc] dark:bg-[#444444] p-4 rounded-lg shadow-md">
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">
                B. Tech in Computer Science and Engineering, (DBATU) CGPA - 7.5/10
              </p>
              <p className="text-md text-[#2C2C3A] dark:text-[#BDC3C7]">
                Matoshri Pratishthan Group of Institution, Nanded.
              </p>
              <p className="text-sm text-right text-[#2C2C3A] dark:text-[#BDC3C7]">2021 - 2024</p>
            </div>
            <div className="bg-[#c7cacc] dark:bg-[#444444] p-4 rounded-lg shadow-md">
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">
                POLYTECHNIC (Computer Technology), Percentage- 84.51%
              </p>
              <p className="text-md text-[#2C2C3A] dark:text-[#BDC3C7]">
                Government Polytechnic Bramhapuri, Chandrapur.
              </p>
              <p className="text-sm text-right text-[#2C2C3A] dark:text-[#BDC3C7]">2018 - 2021</p>
            </div>
            <div className="bg-[#c7cacc] dark:bg-[#444444] p-4 rounded-lg shadow-md">
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">Class X (SSC) Percentage- 80%</p>
              <p className="text-md text-[#2C2C3A] dark:text-[#BDC3C7]">
                Nehru Vidyalaya Chimur, Chandrapur.
              </p>
              <p className="text-sm text-right text-[#2C2C3A] dark:text-[#BDC3C7]">2017 - 2018</p>
            </div>
          </div>
        </div>

        <div className="bg-[#bac0c4] dark:bg-[#333333] shadow-lg rounded-lg p-6" data-aos="fade-left">
          <h3 className="text-3xl font-bold text-[#2C2C3A] dark:text-[#BDC3C7] mb-6">Personal Details</h3>
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <AiTwotoneStar className="text-[#6a0dad] dark:text-[#F39C12] me-3" />
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">Name: Vaishnavi Wankhede</p>
            </div>
            <div className="flex items-start mb-4">
              <AiTwotoneStar className="text-[#6a0dad] dark:text-[#F39C12] me-3" />
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">
                Permanent Address: At Shedegaon, Ta. Chimur, Dist. Chandrapur.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <AiTwotoneStar className="text-[#6a0dad] dark:text-[#F39C12] me-3" />
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">
                Current Address: Deccan Gymkhana, Shivajinagar, Pune.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <AiTwotoneStar className="text-[#6a0dad] dark:text-[#F39C12] me-3" />
              <p className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7]">Date of Birth: 6-10-2002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
