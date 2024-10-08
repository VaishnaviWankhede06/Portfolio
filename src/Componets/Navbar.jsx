/*import React from 'react';
import Lightmode from './Lightmode';

const Menu = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Skills", link: "/#services" },
  { id: 4, name: "Projects", link: "/#project" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  return (
    <div className='relative flex px-4 pt-4 justify-center mt-5 bg-[#2C2C3A]' id='home'>
      <span className='me-20 text-3xl font-medium font-style1 text-[#F39C12]'>
        Portfolio
      </span>

      <div className='flex ms-60 text-right justify-center'>
        <ul className='sm:flex item-center gap-4 text-2xl font-style1 font-medium text-[#BDC3C7]'>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className='inline-block px-4 relative hover:text-[#F39C12] transition-all duration-300'
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Lightmode/>
      </div>
    </div>
  );
};

export default Navbar;*/

import React from 'react';
import Lightmode from './Lightmode'; // Assuming this handles the light/dark mode toggle

const Menu = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Skills", link: "/#skills" },
  { id: 4, name: "Projects", link: "/#projects" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  return (
    <div className="relative flex px-4 pt-4 justify-center mt-5 bg-[#f5f5f5] dark:bg-[#2C2C3A]" id="home">
      <span className="me-20 text-3xl font-medium text-[#6a0dad] dark:text-[#F39C12]">
        Portfolio
      </span>

      <div className="flex ms-60 text-right justify-center">
        <ul className="sm:flex items-center gap-4 text-2xl font-medium text-[#333333] dark:text-[#BDC3C7]">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-[#6a0dad] dark:hover:text-[#F39C12] transition-all duration-300"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Lightmode /> {/* Light/Dark mode toggle button or functionality */}
      </div>
    </div>
  );
};

export default Navbar;

