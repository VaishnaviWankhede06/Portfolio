/*import React, { Component } from "react";
import JSON from './Skill_info.json';
import Skill from "./Skill";

class SkillList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON
    };
  }

  render() {
    return (
      <section className="min-h-screen bg-[#2C2C3A] py-16 px-4" id="services">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#F39C12] mb-12">
            My Skills
          </h1>
          <p className="text-lg text-[#BDC3C7] mb-16">
            These are some of the technologies and skills I am proficient in.
          </p>
        </div>
        <Skill prodlist={this.state.Products} />
      </section>
    );
  }
}

export default SkillList;


import React, { Component } from "react";
import JSON from './Skill_info.json';
import Skill from "./Skill";
import AOS from 'aos';
import 'aos/dist/aos.css';

class SkillList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON
    };
  }

  componentDidMount() {
    AOS.init({ duration: 1000 }); // Animation duration
  }

  render() {
    return (
      <section className="min-h-screen bg-[#2C2C3A] py-16 px-4" id="services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-[#F39C12]"
              data-aos="fade-down"
            >
              My Skills
            </h1>
            <p
              className="text-lg text-[#BDC3C7] mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              These are some of the technologies and skills I am proficient in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {this.state.Products.map((data) => (
              <div
                key={data.id}
                className="bg-[#2C2C3A] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="border border-gray-600 rounded-lg overflow-hidden mb-4">
                  <img
                    src={data.image}
                    alt={data.skill}
                    className="w-full h-24 object-contain"
                  />
                </div>
                <span className="block text-center text-lg font-semibold text-[#ECF0F1]">
                  {data.skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SkillList;*/


import React, { Component } from "react";
import JSON from './Skill_info.json';
//import Skill from "./Skill";
import AOS from 'aos';
import 'aos/dist/aos.css';

class SkillList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON,
    };
  }

  componentDidMount() {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1s duration
  }

  render() {
    return (
      <section className="min-h-screen py-16 px-4 bg-[#ECF0F1] dark:bg-[#2C2C3A]" id="services">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#F39C12] dark:text-[#F39C12]" data-aos="fade-down">
              My Skills
            </h1>
            <p
              className="text-lg text-[#2C2C3A] dark:text-[#BDC3C7] mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              These are some of the technologies and skills I am proficient in.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {this.state.Products.map((data) => (
              <div
                key={data.id}
                className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-[#F7F9FA] dark:bg-[#2C2C3A] dark:shadow-gray-800"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="border border-gray-400 dark:border-gray-600 rounded-lg overflow-hidden mb-4">
                  <img
                    src={data.image}
                    alt={data.skill}
                    className="w-full h-24 object-contain"
                  />
                </div>
                <span className="block text-center text-lg font-semibold text-[#2C2C3A] dark:text-[#ECF0F1]">
                  {data.skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SkillList;

