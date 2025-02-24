import React from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    return (

        <div className='Navbar'>
            <img className="logo" src={assets.logo} alt="logo" />
            <img className='profile' src={assets.ramya} alt="profile" />
        </div>
    )
}



export default Navbar
