import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './Imageslider.css';

import image1 from '../images/menudisplay4.jpg';
import image2 from '../images/menudisplay5.PNG';
import image3 from '../images/menudisplay6.jpg';
import image4 from '../images/menudisplay7.PNG';
import image5 from '../images/menudisplay8.jpg';
import image6 from '../images/menudisplay9.jpg';

const images = [
  { src: image1, text: 'PIZZA' },
  { src: image2, text: 'BURGER' },
  { src: image3, text: 'GRILL' },
  { src: image4, text: 'PASTA' },
  { src: image5, text: 'BUREK' },
  { src: image6, text: 'SALAD' },
];

export default function ImageSlider() {
  return (
    <div className="slider-container2">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={70}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          1400: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
          600: { slidesPerView: 1 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Link to={`/${img.text.toLowerCase()}`} className="image-with-text-slider">
              <img src={img.src} alt={img.text} className="image1slider" />
              <p className="centered-text">{img.text}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}