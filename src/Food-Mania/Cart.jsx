import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import GIF from "../assets/emptyGIF.webp";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="cart">
      <h1>My Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="fav-empty">
            <div className="fav-img">
              <img src={GIF} alt="empty cart" />
            </div>
            <div className="cart-btn">
              <a href="/Menu">Continue Shopping</a>
            </div>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <h3>
                  {item.price} x {item.quantity}
                </h3>
                <h3>Total: ₹{item.totalPrice.toFixed(2)}</h3>
                <div className="quantity-controls">
                  <button onClick={() => increaseQuantity(item.title)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.title)}>-</button>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-subtotal">
          <h2>Subtotal: ₹{calculateTotal().toFixed(2)}</h2>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
