import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img className='logo' src={assets.logo} alt='logo'/>
                <p> Your access to all things entertainment is here! With BookMyShow, discover the latest movies, biggest concerts, most awaited sporting events, plays, and various other LIVE event experiences.</p>
                <div className='footer-social-icons'>
                    <img src={assets.whattsapp} alt='whattsapp'/>
                    <img src={assets.mail} alt='mail'/>
                    <img src={assets.pinterest} alt='pinterest'/>
                    <img src={assets.twitter} alt='twitter'/>
                    <img src={assets.snapchat} alt='snapchat'/>
                    <img src={assets.insta} alt='insta'/>
                    <img src={assets.facebook} alt='facebook'/>
                    <img src={assets.youtube} alt='youtube'/>
                    <img src={assets.telegram} alt='telegram'/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>MoViE M@StI</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9956485698</li>
                    <li>moviemasti@movies.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
            Copyright 2025@moviemasti.com || All Rights Reserved
        </p>
    </div>
  )
}

export default Footer
