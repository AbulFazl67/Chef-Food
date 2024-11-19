import React from 'react';
import Image from '../assets/great.jpg';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
import { FaFaceGrin } from "react-icons/fa6";
import logo from '../assets/edit.png'

const Order = () => {
  return (
    <>
    <div className="order-main">
      <div className="order-txt">
        <h1><span>Order</span> Now</h1>
      </div>
      <div className="order-containt">
        <div className="order-image">
          <img src={Image} alt="image" />
        </div>
        <div className="order-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="number" id="number" placeholder="Your Number" />
          </div>
          <div className="form-group">
            <label htmlFor="count">How Many Order</label>
            <input type="number" id="count" placeholder="How Many Order" />
          </div>
          <div className="form-group">
            <label htmlFor="food">Your Order</label>
            <input type="text" id="food" placeholder="Food Name" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Your Address" />
          </div>
          <div className="order-btn">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="footer_main">
        <div className="footer_tag">
          <h2>Food Services</h2>
          <p>Place Orders</p>
          <p>Fast Delivery & Takeout</p>
          <p>Secure Payment Options</p>
          <p>Order Tracking</p>
          <p>Customer Reviews</p>
          <p>Exclusive Promotions</p>
          <p>24/7 Customer Support</p>
          <p>Diverse Cuisine Selection</p>
          <p>Special Dietary Options</p>
          <p>Pre-Schedule Your Orders</p>
        </div>

        <div className="footer_tag">
          <h2>Quick Links</h2>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Gallery</p>
          <p>Order</p>
          <p>Links to Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQs</p>
          <p>Careers</p>
        </div>

        <div className="footer_tag">
          <h2>Location</h2>
          <p>India</p>
          <p>Italy</p>
          <p>USA</p>
          <p>Sri Lanka</p>
          <p>Japan</p>
        </div>

        <div className="footer_tag">
          <h2>Contact Us</h2>
          <p>+91 45673 78965</p>
          <p>savorydelightshub123@gmail.com</p>
          <p>abulfazl20@gmail.com</p>
        </div>

        <div className="footer_tag">
          <h2>Stay Connected</h2>
          <FaFacebook className='i'/>  
          <FaInstagram className='i'/>
          <FaTwitter className='i' />
          <FaLinkedin className='i'/>
        </div>

        <div className="footer_tag">
          <img src={logo} alt="SavoryDelightsHub Logo" />
          <h2>SavoryDelightsHub</h2>
        </div>
      </div>
    </footer>

    </>
  );
};

export default Order;
