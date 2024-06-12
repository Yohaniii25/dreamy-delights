import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="slider-image-container slide-1">
        <div className="slider-text">
          <h2 className="slider-heading">Special Offers</h2>
          <p className="slider-description">Gift More. Spend Less. From $2.90</p>
          <button className="slider-button">Shop Now</button>
        </div>
      </div>
      <div className="slider-image-container slide-2">
        <div className="slider-text">
          <h2 className="slider-heading">Exclusive Deals</h2>
          <p className="slider-description">Save Big on Your Favorite Products</p>
          <button className="slider-button">Shop Now</button>
        </div>
      </div>
      <div className="slider-image-container slide-3">
        <div className="slider-text">
          <h2 className="slider-heading">Limited Time Offer</h2>
          <p className="slider-description">Hurry, Offer Ends Soon!</p>
          <button className="slider-button">Shop Now</button>
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
