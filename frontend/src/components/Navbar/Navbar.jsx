import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = ({ setShowSignin, showSignin }) => {
  const [Menuvar, setMenu] = useState("Home");
  const { getTotalCartAmount,token,setToken} = useContext(StoreContext);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme; // Apply theme to the body
  };

  const logout=()=>{
      localStorage.removeItem('token');
      setToken('');
        Navigate('/')
      
  }
  return (
    <div className={`navbar ${theme}`}>
      <img id="logo" src={assets.logo} alt="logo" />
      <ul className="navbar-list">
        <Link onClick={() => setMenu("Home")} className={Menuvar === "Home" ? "active" : ""}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("Movie List")} className={Menuvar === "Movie List" ? "active" : ""}>
          Movie List
        </a>
        <a href="#app-download" onClick={() => setMenu("MobileApp")} className={Menuvar === "MobileApp" ? "active" : ""}>
          MobileApp
        </a>
        <a href="#footer" onClick={() => setMenu("Contact")} className={Menuvar === "Contact" ? "active" : ""}>
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket} alt="basket icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ?
        <button className="searchbtn" onClick={() => setShowSignin(true)}>Sign in</button>:<div className='navbar-profile'>
        <img src={assets.person} alt="" />
        <ul className="nav-profile-dropdown">
          <li><img src={assets.bag} alt="" /><p>Orders</p></li>
          <hr />
          <li><img src={assets.logout} alt=""/><p onClick={logout}>Logout</p></li>
        </ul>
        </div>
        }
      <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;