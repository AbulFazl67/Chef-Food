import React from 'react';
import './All-Files.css';
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-div'>
      <div className='home-main'>
          <div className="home-txt">
            <p>Searching for Your</p>
            <h1>Next Bite of <span>Delight?</span></h1>
            <p>It's Right Here!</p>
          </div>
        <p className='description'>
          Welcome to our culinary haven, where every bite is a journey of delight. From sizzling street food sensations to exquisite fine dining creations, our passionate chefs infuse each dish with love. Explore a world of taste, where authenticity meets innovation, and indulge in gastronomic adventures. Join us and let your taste buds revel in the extraordinary – your next delight awaits, right here in our food paradise.
        </p>
        <div className="home-btn">
          <button type="button">
            <span></span>
            <NavLink to="/menu          ">Order Now</NavLink>
            <FaAngleRight className='right'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
