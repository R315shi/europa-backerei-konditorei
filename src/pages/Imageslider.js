import React, { useEffect, useState, useRef } from "react";

import image4 from "../images/menudisplay4.jpg";
import image5 from "../images/menudisplay5.PNG";
import image6 from "../images/menudisplay6.jpg";
import image7 from "../images/menudisplay7.PNG";
import image8 from "../images/menudisplay8.jpg";
import image9 from "../images/menudisplay9.jpg";
const images = [
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const visibleCount = 3;

export default function SliderStrip() {
  const [startIndex, setStartIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const advance = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setStartIndex((prev) => (prev + 1) % images.length);
        setIsSliding(false);
      }, 500); // match CSS animation duration
    }
  };

  const retreat = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setStartIndex((prev) =>
          (prev - 1 + images.length) % images.length
        );
        setIsSliding(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      advance();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = images
    .concat(images)
    .slice(startIndex, startIndex + visibleCount + 1);

  return (
    <div>
       <div className='menutext2'>
    <h1>ON THE MENU</h1>
    <h3>DRINKS</h3>
    </div>
    <div className="slider-container">
      <button className="nav left" onClick={retreat}>
        &#10094;
      </button>
      <div className="slider-window">
        <div
          className={`slider-track ${isSliding ? "sliding" : ""}`}
          key={startIndex}
        >
          {visibleImages.map((img, i) => (
            <img key={i} src={img} alt={`Slide ${i}`} />
          ))}
        </div>
      </div>
      <button className="nav right" onClick={advance}>
        &#10095;
      </button>
    </div>
    </div>
  );
}