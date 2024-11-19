import React, { useContext } from 'react';
import { FavContext } from '../Context/FavContext';
import fav from '../assets/fav2.png'; 
import { FaHeart } from "react-icons/fa";
import { CartContext } from '../Context/CartContext';

const Fav = () => {
  const { addToCart } = useContext(CartContext);
  const { favoriteItems, removeFromFav } = useContext(FavContext);

  return (
    <div className="fav-main">
      <h1>My Favorites</h1>
      {favoriteItems.length === 0 ? (
        <div className="fav-empty">
          <div className="fav-img">
            <img src={fav} alt="No favorites" />
          </div>
          <div className="fav-txt">
            <h2>Press <FaHeart className='red-heart'/> to add an item to favourites.</h2>
          </div>
        </div>
      ) : (
        <div className="fav-cards">
          {favoriteItems.map((item, index) => (
            <div className="fav-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <h3>{item.price}</h3>
              <div className="fav-card-buttons">
                <button onClick={() => addToCart(item)} className='yellow'>Order</button>
                <button onClick={() => removeFromFav(item.title)} className='red'>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fav;
