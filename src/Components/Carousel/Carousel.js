// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Import the CSS file for the carousel

const Carousel = () => {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const items = [
    { title: "For Her", imageClass: "for-her", count: "10 items" },
    { title: "For Baby", imageClass: "for-baby", count: "8 items" },
    { title: "For Him", imageClass: "for-him", count: "12 items" },
    { title: "For Occasions", imageClass: "for-occasions", count: "15 items" },
  ];

  return (
   
    <div className="carousel-container">
         <div className="carousel-title">Our Gift Kits</div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            
            <div className={`carousel-image ${item.imageClass}`}></div>
            <h3>{item.title}</h3>
            <p>{item.count}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
