import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="py-10 bg-gray-100" id="services">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Skills</h2>

        <div className="flex items-center mb-8">
          <TbBrandJavascript className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">Programming C</p>
              <p className="text-lg font-medium text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <TbBrandJavascript className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">SQL</p>
              <p className="text-lg font-medium text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <TbBrandJavascript className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">Python</p>
              <p className="text-lg font-medium text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>

        
        <div className="flex items-center mb-8">
          <FaHtml5 className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">HTML</p>
              <p className="text-lg font-medium text-gray-700">90%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="flex items-center mb-8">
        <IoLogoCss3 className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">CSS</p>
              <p className="text-lg font-medium text-gray-700">85%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>

       
        <div className="flex items-center mb-8">
          <TbBrandJavascript className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">JavaScript</p>
              <p className="text-lg font-medium text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="flex items-center mb-8">
          <FaReact className="text-4xl text-orange-600 w-12" />
          <div className="ml-4 w-full">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-medium text-gray-700">React</p>
              <p className="text-lg font-medium text-gray-700">40%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;