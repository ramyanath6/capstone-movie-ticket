import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Movielist from './pages/Movielist/Movielist'
import Language from './pages/Language/Language'
import Bookings from './pages/Bookings/Bookings'
import Footer from './components/Footer/Footer'
import SigninPopup from './components/SigninPopup/SigninPopup'
import Cart from './pages/cart/cart'

const App = () => {

  const[showSignin,setShowSignin]=useState(false);

  return (
    <>
    {showSignin?<SigninPopup setShowSignin={setShowSignin}/>:<></>}
    <div className="appclass">
      <Navbar  setShowSignin={setShowSignin} showSignin={showSignin} />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movielist' element={<Movielist/>}></Route>
        <Route path='/language' element={<Language/>}></Route>
        <Route path='/bookings' element={<Bookings/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
