// CarouselPopup.jsx
/*import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselPopup = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,             // Enables automatic sliding
    autoplaySpeed: 3000, 
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 rounded-lg">
      <div className="relative bg-white rounded-lg overflow-hidden w-11/12 max-w-4xl">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img className="w-full" src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPopup;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselPopup = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,             // Enables automatic sliding
    autoplaySpeed: 3000,
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      
      <div className="relative bg-white rounded-lg overflow-hidden p-4" style={{ width: '100%', height: '100%' }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
             
              <img className="w-full h-full object-cover" src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPopup;*/


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselPopup = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable next and previous buttons
  };

  return (
    <div className="w-[500px] h-[300px] flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 rounded-lg"> {/* Adjusted carousel size */}
      <div className="relative bg-white rounded-lg overflow-hidden w-full h-full">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img className="w-full h-full object-cover" src={img} alt={`Slide ${index}`} /> {/* Fit images inside carousel */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPopup;
