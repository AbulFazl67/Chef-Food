import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(cartItem => cartItem.title === item.title);

      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        updatedItems[itemIndex].totalPrice += parseFloat(item.price.replace('₹', ''));
        toast.success("Item Quantity Updated in Cart");
        return updatedItems;
      } else {
        toast.success("Item Added To Cart");
        return [...prevItems, { ...item, quantity: 1, totalPrice: parseFloat(item.price.replace('₹', '')) }];
      }
    });
  };

  const increaseQuantity = (title) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.title === title) {
          return { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + parseFloat(item.price.replace('₹', '')) };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const decreaseQuantity = (title) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.title === title) {
          return { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - parseFloat(item.price.replace('₹', '')) };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updatedItems;
    });
  };

  const removeFromCart = (title) => {

    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.title !== title);
      toast.success("Item Removed From Cart");
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
  