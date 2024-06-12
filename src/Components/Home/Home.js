import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Box from "../Box/Box";
import { FaGift, FaTicketAlt, FaPhoneAlt } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <ImageSlider />
      <div className="additional-content">
        <div className="boxes-container">
          <Box
            icon={<FaGift />}
            heading="Gift"
            paragraph="Surprise your loved ones with our exclusive gift options."
          />
          <Box
            icon={<FaTicketAlt />}
            heading="Voucher"
            paragraph="Get amazing discounts with our special vouchers."
          />
          <Box
            icon={<FaPhoneAlt />}
            heading="Customer Care"
            paragraph="We're here to help you with any inquiries or issues."
          />
        </div>
      </div>
      <div className="info-section">
        <div className="info-column">
          <h2>WHO ARE WE ?</h2>
          <p>
            Dreamy Delights Gift Shop is your go-to destination for unique and
            personalized gifts. We offer a wide range of products to make every
            occasion special, from birthdays to anniversaries. Our mission is to
            bring joy and create memorable experiences through our curated
            collection of gifts.
          </p>
        </div>
        <div className="info-column img-column"></div>
      </div>
      <Carousel /> {/* Include the Carousel component */}
      {/* three column three boxes with offers background contains image and text */}
      <div className="offers-container">
        <a href="/products" className="offer-box">
          <div className="offer-content">
            <div className="offer-image offer1"></div>
            <div className="offer-text">
              <h3>Valentine's Day</h3>
              <p>Love Goes On</p>
            </div>
          </div>
        </a>
        <a href="/products" className="offer-box">
          <div className="offer-content">
            <div className="offer-image offer2"></div>
            <div className="offer-text">
              <h3>New Collection</h3>
              <p>All Occasions</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </a>
        <a href="/products" className="offer-box">
          <div className="offer-content">
            <div className="offer-image offer3"></div>
            <div className="offer-text">
              <h3>Christmas Sale</h3>
              <p>Up To 40% Off</p>
              <button>VIEW DETAIL</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
