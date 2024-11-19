import React from 'react';
import choclate from '../assets/caramel-ice-creame.jpg';
import cupcake from '../assets/cup_cake.avif';
import brownie from '../assets/brownie.webp';
import cherycake from '../assets/cake.webp';
import oreoshake from '../assets/milkshake.webp';
import fruite from '../assets/fruit-juice.jpg';

const Gallary = () => {
  return (
    <div className="gallery-main">
      <div className="gallery-txt">
        <h1>Our <span>Gallery</span></h1>
      </div>
      <div className="gallery-boxes">
        <div className="gallery-bx">
          <div className="gallery-image">
            <img src={choclate} alt="Caramel Ice-Cream" />
            <div className="hover-content">
              <h2>Caramel Ice-Cream</h2>
              <p>Join us for a delightful treat! Indulge in our luscious caramel ice cream, a symphony of sweetness waiting to satisfy your cravings.</p>
              <div className="gallery-btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-bx">
          <div className="gallery-image">
            <img src={cupcake} alt="Cupcake" />
            <div className="hover-content">
              <h2>Cupcake</h2>
              <p>Delight in our delicious cupcakes, a perfect treat for any occasion, topped with creamy frosting and sprinkles.</p>
              <div className="gallery-btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-bx">
          <div className="gallery-image">
            <img src={brownie} alt="Brownie" />
            <div className="hover-content">
              <h2>Brownie</h2>
              <p>Satisfy your chocolate cravings with our rich and gooey brownies, a heavenly delight for any chocolate lover.</p>
              <div className="gallery-btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-bx">
          <div className="gallery-image">
            <img src={cherycake} alt="Cherry Cake" />
            <div className="hover-content">
              <h2>Cherry Cake</h2>
              <p>Experience the burst of flavor with our cherry cake, a perfect blend of moist cake and juicy cherries.</p>
              <div className="gallery-btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-bx">
          <div className="gallery-image">
            <img src={oreoshake} alt="Oreo Shake" />
            <div className="hover-content">
              <h2>Oreo Shake</h2>
              <p>Enjoy the perfect blend of creamy milkshake and crunchy Oreo cookies in our delightful Oreo Shake.</p>
              <div className="gallery-btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-bx">
          <div className="gallery-image">
            <img src={fruite} alt="Fruit Juice" />
            <div className="hover-content">
              <h2>Fruit Juice</h2>
              <p>Refresh yourself with our freshly squeezed fruit juices, packed with vitamins and natural flavors.</p>
              <div className="gallery-btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
