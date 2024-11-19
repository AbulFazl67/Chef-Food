import React, { useContext } from 'react';
import './All-Files.css';
import { FaHeart } from "react-icons/fa";
import burger from '../assets/burger.avif';
import fried from '../assets/fried-chicken.webp';
import chi65 from '../assets/ch-65.jpg';
import pizza from '../assets/pizza.avif';
import nudals from '../assets/noodles.jpg';
import pasta from '../assets/pasta.jpg';
import sandwich from '../assets/sandwich.webp';
import fries from '../assets/fries.jpg';
import lemon from '../assets/lemon-sambr.jpg';
import paneer2 from '../assets/paneer2.jpg';   
import biryani from '../assets/chicken.webp';
import curry from '../assets/curry.jpg';
import korma from '../assets/badam-korma.webp';
import chicken from '../assets/chicken-wings-with-lemon-and-parsley.jpeg';
import tandoori from '../assets/tandoori.webp';
import fishbiryani from '../assets/fish-biryani.webp';
import cantaberry from '../assets/cantaberry.webp';
import fizz from '../assets/Fizz.webp';
import strawberry from '../assets/strawberry.webp';
import watermelon from '../assets/watermelon.webp';
import { CartContext } from '../Context/CartContext';
import { FavContext } from '../Context/FavContext';

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const { addToFav } = useContext(FavContext);

  const menuItems = [
    { img: burger, title: 'Delicious Burger', desc: 'A succulent: Juicy patty, melting cheese, crisp veggies, and zesty sauce, a symphony of flavors and textures in every bite.', price: "₹400.00" },
    { img: fried, title: 'Fried Chicken', desc: 'Crispy, golden-fried chicken, its exterior shatteringly delicious while the inside remains tender and juicy, a harmonious blend.', price: "₹800.00" },
    { img: chi65, title: 'Chicken 65', desc: 'Spicy, tender chicken bites, deep-fried to golden perfection, coated in a fiery blend of aromatic spices, a flavor-packed South Indian.', price: "₹650.00" },
    { img: pizza, title: 'Piping-hot Pizza', desc: 'Oven-fresh, cheesy, and aromatic, a delightful medley of toppings atop a golden crust, an irresistible slice of heaven.', price: "₹500.00" },
    { img: nudals, title: 'Nutrient-rich Noodles', desc: 'Versatile and comforting, these strands of wheat or rice are boiled to perfection and often stir-fried with a myriad of flavorful ingredients.', price: "₹250.00" },
    { img: pasta, title: 'Pasta', desc: 'Versatile Italian staple, crafted from durum wheat semolina, available in various shapes and sizes, serving as a canvas for diverse.', price: "₹250.00" },
    { img: sandwich, title: 'Savory Sandwich', desc: 'A delightful culinary creation, consisting of layers of ingredients between slices of bread, offering endless combinations of.', price: "₹350.00" },
    { img: fries, title: 'Flavorful Fries', desc: 'Golden crispy potato strips, seasoned to perfection, a classic side dish thats irresistibly crunchy on the outside and tender inside.', price: "₹350.00" },
    { img: lemon, title: 'Chitrannam (Lemon Rice)', desc: 'A vibrant South Indian dish, bursting with tangy and zesty flavors, featuring rice, spices, and a mix of delectable ingredients.', price: "₹500.00" },
    { img: paneer2, title: 'Palatable Paneer', desc: 'A versatile Indian cheese, mild and creamy in taste, made from coagulated milk, commonly used in a variety of savory and sweet dishes.', price: "₹450.00" },
    { img: biryani, title: 'Chicken Biryani', desc: 'A fragrant Indian dish, marrying succulent chicken, aromatic spices, and long-grain rice, creating a flavorful, one-pot masterpiece.', price: "₹750.00" },
    { img: curry, title: 'Egg Curry', desc: 'A savory Indian dish featuring boiled eggs immersed in a rich, spiced tomato-based gravy.', price: "₹450.00" },
    { img: chicken, title: 'Chicken Wings', desc: 'Chicken wings are a popular dish, typically fried or grilled, served with flavorful sauces like BBQ or buffalo..', price: "₹600.00" },
    { img: korma, title: 'Badam Mutton Korma', desc: 'A flavourful mutton curry, where the meat is stirred with curd, garlic-ginger paste, cloves, cardamom and cinnamon sticks.', price: "₹550.00" },
    { img: tandoori, title: 'Tandoori Lamb Chops', desc: 'Lamb chops marinated in strained yogurt and flavoursome masalas. Cooked till tender, this dish is guaranteed to impress.', price: "₹350.00" },
    { img: fishbiryani, title: 'Malabar Fish Biryani', desc: 'This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish.', price: "₹450.00" },
    { img: cantaberry, title: 'Cantaberry Brandytini', desc: 'This brandy slushie combines cantaloupe, vodka, lime juice, and blackberry brandy to create a "brandytini.', price: "₹750.00" },
    { img: fizz, title: 'Pomegranate-Fizz', desc: 'This pomegranate fizz is a refreshing and vibrant mocktail that balance fresh strawberries and rimming the glass in sugar..', price: "₹150.00" },
    { img: strawberry, title: 'strawberry Shortcake', desc: 'This fruity, boozy milkshake tastes just like strawberry shortcake, according to reviewers.enjoy on a hot summer day.', price: "₹200.00" },
    { img: watermelon, title: 'Watermelon Margaritas', desc: 'Put your fresh watermelon to good use with these refreshing margaritas that will keep you cool all summer long.', price: "₹200.00" },
  ];

  return (
    <div className="menu-main" id='menu'>
      <div className="menu-txt">
        <h1>Our <span>Menu</span></h1>
      </div>
      <div className="menu-cards">
        {menuItems.map((item, index) => (
          <div className="cards" key={index}>
            <div className="card-img">
              <img src={item.img} alt={item.title} />
              <div className="fav-hover" onClick={() => addToFav(item)}>
                <FaHeart className='i' />
              </div>
            </div>
            <div className="card-info">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <h3>{item.price}</h3>
              <div className="card-btn">
                <button onClick={() => addToCart(item)}>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;