import React, { useState } from "react";
import "./Slider.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  const [slide, setSlides] = useState(0);
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1701580706219-7e08329b069f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1701655987920-1b8527b9b9a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1701200952150-e46a46602bdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const prevSlide = () => {
    setSlides((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setSlides((prev) => (prev + 1) % 3);
  };
  return (
    <>
      <div className="container">
        <div className="arrow" onClick={prevSlide}>
          {<FaArrowCircleLeft />}
        </div>
        <div className="slides-container">
          {
            <div className="image-container">
              <img src={images[slide].src} alt="ad" className="image" />
            </div>
          }
         
        </div>
        <div className="arrow" onClick={nextSlide}>
          {<FaArrowCircleRight />}
        </div>
      </div>
    </>
  );
};

export default Slider;
