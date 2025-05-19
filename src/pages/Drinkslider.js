import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './Drinkslider.css';

import image1 from "../images/menudisplay1.PNG";
import image2 from "../images/menudisplay2.jpg";
import image3 from "../images/menudisplay3.PNG";

export default function ResponsiveImageMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1500);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    <div className="image-with-text" key="1">
      <Link to="/hotdrinks">
        <img src={image1} className="image1" alt="Menu 1" />
      </Link>
      <p className="centered-text">COFFEE</p>
    </div>,
    <div className="image-with-text" key="2">
      <Link to="/drinks">
        <img src={image2} className="image1" alt="Menu 2" />
      </Link>
      <p className="centered-text">DRINKS</p>
    </div>,
    <div className="image-with-text" key="3">
      <Link to="/alcoholicdrinks">
        <img src={image3} className="image1" alt="Menu 3" />
      </Link>
      <p className="centered-text">ALCOHOL</p>
    </div>,
  ];

  return (
    <>
      {isMobile ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="imagemenu1"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="imagemenu1">
          {slides.map((slide) => slide)}
        </div>
      )}
    </>
  );
}