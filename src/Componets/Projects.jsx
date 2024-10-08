
/*


import React from 'react';
import CarouselPopup from './CarouselPopup';
import logo from './free-images.jpg'; // Replace this with your dynamic image logic if needed

const Projects = ({ prodlist, hoveredCardId, onHover, onMouseLeave }) => {
  const renderList = () => {
    if (prodlist) {
      return prodlist.map((data) => (
        <div  
          key={data.id}
          className="relative max-w-xs p-4 shadow-lg rounded-xl bg-[#2C2C3A] hover:bg-[#343a40] transition-all transform hover:scale-105 duration-300"
          data-aos="flip-left"
          onMouseEnter={() => onHover(data.id)}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex justify-center mb-4">
            <img className="h-36 w-36 object-cover shadow-md" src={logo} alt="logo" />
          </div>
          <h1 className="text-center text-2xl text-[#F39C12] font-semibold mb-2">{data.Name}</h1>
          <p className="text-center text-md text-[#BDC3C7] mb-4">{data.description}</p>

          {hoveredCardId === data.id && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
              
              <div className="relative w-[500px] h-[300px] mb-4"> 
                <CarouselPopup images={data.images} />
              </div>
              <div className="flex justify-between items-center space-x-2 z-10">
                <a href={data.link1} target="_blank" rel="noopener noreferrer">
                  <button className="flex-grow text-[#2C2C3A] font-bold bg-[#F39C12] hover:bg-[#D68910] px-4 py-2 rounded-lg transition-colors">
                    {data.button1}
                  </button>
                </a>
                <a href={data.link2} target="_blank" rel="noopener noreferrer">
                  <button className="flex-grow text-[#2C2C3A] font-bold bg-[#F39C12] hover:bg-[#D68910] px-4 py-2 rounded-lg transition-colors">
                    {data.button2}
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      ));
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
        {renderList()}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import CarouselPopup from './CarouselPopup';
import logo from './free-images.jpg'; // Replace this with your dynamic image logic if needed

const Projects = ({ prodlist, hoveredCardId, onHover, onMouseLeave, darkMode }) => {
  const renderList = () => {
    if (prodlist) {
      return prodlist.map((data) => (
        <div  
          key={data.id}
          className={`relative max-w-xs p-4 shadow-lg rounded-xl ${darkMode ? 'bg-[#2C2C3A] hover:bg-[#343a40]' : 'bg-white hover:bg-gray-200'} transition-all transform hover:scale-105 duration-300`}
          data-aos="flip-left"
          onMouseEnter={() => onHover(data.id)}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex justify-center mb-4">
            <img className="h-36 w-36 object-cover shadow-md" src={logo} alt="logo" />
          </div>
          <h1 className={`text-center text-2xl font-semibold mb-2 ${darkMode ? 'text-[#F39C12]' : 'text-[#333333]'}`}>
            {data.Name}
          </h1>
          <p className={`text-center text-md mb-4 ${darkMode ? 'text-[#BDC3C7]' : 'text-[#555555]'}`}>
            {data.description}
          </p>

          {hoveredCardId === data.id && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
              <div className="relative w-[500px] h-[300px] mb-4">
                <CarouselPopup images={data.images} />
              </div>
              <div className="flex justify-between items-center space-x-2 z-10">
                <a href={data.link1} target="_blank" rel="noopener noreferrer">
                  <button className={`flex-grow font-bold ${darkMode ? 'text-[#BDC3C7] bg-[#F39C12] hover:bg-[#D68910]' : 'text-white bg-[#007bff] hover:bg-[#0056b3]'} px-4 py-2 rounded-lg transition-colors`}>
                    {data.button1}
                  </button>
                </a>
                <a href={data.link2} target="_blank" rel="noopener noreferrer">
                  <button className={`flex-grow font-bold ${darkMode ? 'text-[#BDC3C7] bg-[#F39C12] hover:bg-[#D68910]' : 'text-white bg-[#007bff] hover:bg-[#0056b3]'} px-4 py-2 rounded-lg transition-colors`}>
                    {data.button2}
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      ));
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
        {renderList()}
      </div>
    </div>
  );
};

export default Projects; */


import React from 'react';
import CarouselPopup from './CarouselPopup';
import logo from './free-images.jpg'; // Replace this with your dynamic image logic if needed

const Projects = ({ prodlist, hoveredCardId, onHover, onMouseLeave, darkMode }) => {
  const renderList = () => {
    if (prodlist) {
      return prodlist.map((data) => (
        <div  
          key={data.id}
          className={`relative max-w-xs p-4 shadow-lg rounded-xl ${darkMode ? 'bg-[#2C2C3A] hover:bg-[#343a40]' : 'bg-[#ECF0F1] hover:bg-gray-200'} transition-all transform hover:scale-105 duration-300`}
          data-aos="flip-left"
          onMouseEnter={() => onHover(data.id)}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex justify-center mb-4">
            <img className="h-36 w-36 object-cover shadow-md" src={logo} alt="logo" />
          </div>
          <h1 className={`text-center text-2xl font-semibold mb-2 ${darkMode ? 'text-[#F39C12]' : 'text-[#2C2C3A]'}`}>
            {data.Name}
          </h1>
          <p className={`text-center text-md mb-4 ${darkMode ? 'text-[#BDC3C7]' : 'text-[#555555]'}`}>
            {data.description}
          </p>

          {hoveredCardId === data.id && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
              <div className="relative w-[500px] h-[300px] mb-4">
                <CarouselPopup images={data.images} />
              </div>
              <div className="flex justify-between items-center space-x-2 z-10">
                <a href={data.link1} target="_blank" rel="noopener noreferrer">
                  <button className={`flex-grow font-bold ${darkMode ? 'text-[#BDC3C7] bg-[#F39C12] hover:bg-[#D68910]' : 'text-white bg-[#007bff] hover:bg-[#0056b3]'} px-4 py-2 rounded-lg transition-colors`}>
                    {data.button1}
                  </button>
                </a>
                <a href={data.link2} target="_blank" rel="noopener noreferrer">
                  <button className={`flex-grow font-bold ${darkMode ? 'text-[#BDC3C7] bg-[#F39C12] hover:bg-[#D68910]' : 'text-white bg-[#007bff] hover:bg-[#0056b3]'} px-4 py-2 rounded-lg transition-colors`}>
                    {data.button2}
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      ));
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
        {renderList()}
      </div>
    </div>
  );
};

export default Projects;

