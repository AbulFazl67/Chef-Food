import React from 'react';
import './All-Files.css';
import image from '../assets/about-right.jpg';
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-main">
      <div className="left-img">
        <img src={image} alt="About us" />
      </div>
      <div className="about-txt">
        <h1><span>About</span> Us</h1>
        <h3>Why Choose Us?</h3>
        <p>
          Choose us for an unparalleled culinary experience. Our dedicated chefs infuse passion into every dish, creating a symphony of flavors that delight the palate. We offer a diverse menu, blending authenticity with innovation, ensuring there's something for every taste. Come savor extraordinary meals, and let us elevate your dining journey.
        </p>
        <div className="about-btn">
          <button type="button">
            <span></span>
            <NavLink to="/order">Order Now</NavLink>
            <FaAngleRight className='right' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
