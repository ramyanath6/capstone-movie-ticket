import React, { useContext, useState } from 'react'
import { assets } from '../../../assets/assets'
import './MovieItems.css'
// import { StoreContext } from '../../context/storeContext'
import { StoreContext } from '../../../context/StoreContext'

const MovieItems = ({id, name, image, price, description}) => {

  const {cartItems, addToCart, removeFromCart,url}=useContext(StoreContext)

  // const [itemcount,setItemCount]=useState(0) 
useState
  return (
   <div className='movie-item'>
    <div className='movie-item-image-container'>
      <img className='mood-item-image' src={url+"/images/"+image}  alt='itemimage'/>
      {
        !cartItems[id] ? <button className='add' onClick={()=>addToCart(id)}> Add</button>:
         <div className='movie-item-counter'><img onClick={()=>removeFromCart(id)} src= {assets.minus} alt='remove'/>
         <p>{cartItems[id]}</p>
         <img onClick={()=>addToCart(id)} src={assets.plus} alt='add'/>
          </div>
      }
    </div>
    <div className='mood-item-info'>
      <div className='movie-item-name-rating'>
        <p>{name}</p>
        <img src={assets.rating_stars} alt='rating' />
    </div>
    <p className='movie=item-description'>{description}</p>
    <p className='mood-item-price'>Rs {price}/-</p>
    </div>
   </div>
  )
}

export default MovieItems
