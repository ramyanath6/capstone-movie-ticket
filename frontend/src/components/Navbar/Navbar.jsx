import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = ({setShowSignin, showSignin}) => {

const [Menuvar,setMenu]=useState('Home');
const {getTotalCartAmount}=useContext(StoreContext);

    return (
        <div className='navbar'>
            <img id='logo' src={assets.logo} alt="logo" />
            <ul className='navbar-list'>
                <Link onClick={()=>setMenu('Home')} className={Menuvar==='Home'?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('Movie List')} className={Menuvar==='Movie List'?"active":""}>Movie List</a>
                <a href='#app-download' onClick={()=>setMenu('MobileApp')} className={Menuvar==='MobileApp'?"active":""}>MobileApp</a>
                {/* <a href='' onClick={()=>setMenu('cart')} className={Menuvar==='cart'?"active":""}>Cart</a> */}
                <a href='#footer' onClick={()=>setMenu('Contact')} className={Menuvar==='Contact'?"active":""}>Contact</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search} alt='search icon' />
                <div className='navbar-search-icon'>
                    <Link to='/cart'>
                    <img src={assets.basket} alt='basket icon' />
                    </Link>
                    <div className={getTotalCartAmount()===0?"":'dot'}>
                    

                    </div>
                </div>
                <button className='searchbtn' onClick={()=>setShowSignin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
