import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedItems = localStorage.getItem("favoriteItems");
    try {
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (error) {
      console.error("Error parsing favorite items from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFav = (item) => {
    setFavoriteItems((prevItems) => {
      if (prevItems.find(favItem => favItem.title === item.title)) {
        toast.info("Item is already in favorites");
        return prevItems;
      } else {
        toast.success("Item Added To Favorites");
        return [...prevItems, item];
      }
    });
  };

  const removeFromFav = (title) => {
    setFavoriteItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.title !== title);
      toast.success("Item Removed From Favorites");
      return updatedItems;
    });
  };

  return (
    <FavContext.Provider value={{ favoriteItems, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContext, FavProvider };