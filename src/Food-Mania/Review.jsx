import React from 'react'
import customer1 from '../assets/pic-1.png'
import customer2 from '../assets/pic-2.png'
import customer3 from '../assets/pic-3.png'
import customer4 from '../assets/pic-4.png'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="review-main" >
      <div className="review-txt">
        <h1>Customer <span>Review</span></h1>
      </div>
      <div className="review-boxes">
        <div className="review-bx">
          <div className="review-image">
            <img src={customer1} alt="photos" />
            <h2>Jane Mitchell</h2>
            <div className="review-icon">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
            </div>
            <p>"Wow! Your food is an absolute delight. I recently ordered your "Delicious Burger", and it was a burst of flavors in every bite. Fast delivery and friendly service too!"
            </p>
          </div>
        </div>
        <div className="review-bx">
          <div className="review-image">
            <img src={customer2} alt="photos" />
            <h2>David Thompson</h2>
            <div className="review-icon">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
            </div>
            <p>"I'm a regular customer here, and I can't get enough of your "SavoryDelightsHub". The "Nutrient-rich Noodles" is my favorite – always cooked to perfection. Keep up the great work!"
</p>
          </div>
        </div>
        <div className="review-bx">
          <div className="review-image">
            <img src={customer3} alt="photos" />
            <h2>Sarah Davidson</h2>
            <div className="review-icon">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
            </div>
            <p>"I'm impressed by the variety of cuisines you offer. From Italian to Indian, your menu has something for everyone. The "Piping-hot Pizza" was exceptional, and the portion size was generous."
</p>
          </div>
        </div>
        <div className="review-bx">
          <div className="review-image">
            <img src={customer4 } alt="photos" />
            <h2>Mike Turner</h2>
            <div className="review-icon">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
            </div>
            <p>"Your customer service is top-notch! I had a special dietary request, and your team accommodated it with ease. The "Walnut Brownie" exceeded my expectations – I'll definitely be ordering again!"
</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review