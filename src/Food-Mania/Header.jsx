import React, { useState } from 'react'
import './All-Files.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/edit.png'
import { FaSearch, FaHeart ,FaBars, FaTimes } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
     
     const toggleMenu = () => {
        setMenuOpen(!menuOpen)
     };

//   return (
//     <>
//       <div className="header">
//         <div className="item">

//             <div className="logo">
//             <Link to='/'>
//                 <img src={logo} alt="Logo" />
//             </Link>
//             </div>

//             <div className="links">
//                 <ul>
//                     <li>
//                         <NavLink to="/" >Home</NavLink>
                   
//                     </li>
//                     <li>
//                         <NavLink to="About" >About</NavLink>
                   
//                     </li>
//                     <li>
//                         <NavLink to="Menu">Menu</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="Gallery">Gallery</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="Review">Review</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="Order">Order</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             <div className="icons">
//            <Link to='Search'>
//             <FaSearch className='i' />
//            </Link> 

//             <Link to='Fav'>
//             <FaHeart className='i' />
//             </Link>

//             <Link to='Cart'>
//             <IoCart className='i'/>
//             </Link>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header

return (
    <>
      <div className="header">
        <div className="item">
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className={`links ${menuOpen ? 'active' : ''}`}> {/* conditional class */}
            <ul>
              <li>
                <NavLink to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink to="About" >About</NavLink>
              </li>
              <li>
                <NavLink to="Menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="Gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="Review">Review</NavLink>
              </li>
              <li>
                <NavLink to="Order">Order</NavLink>
              </li>
            </ul>
          </div>

          <div className="icons">
            <Link to='Fav'>
              <FaHeart className='i' />
            </Link>
            <Link to='Cart'>
              <IoCart className='i' />
            </Link> 
            <Link to='Search'>
              <FaSearch className='i'/>
            </Link>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;