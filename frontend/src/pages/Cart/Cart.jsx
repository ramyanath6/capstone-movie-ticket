import React from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navi=useNavigate();
    const { movie_list, cartItems, removeFromCart, getTotalCartAmount,url} = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div>
                    {movie_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div> 
                                    <div className='cart-items-title cart-items-item'>
                                    <img src={url+"/images/"+item.image}  alt=""/>
                                    <p>{item.name}</p>
                                    <p>Rs.{item.price}/-</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>Rs.{item.price * cartItems[item._id]}/-</p>
                                    <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
                                </div>
                                <hr/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='cart-bottom'>
                    <div className='cart-total'>
                        <h2>Cart Totals</h2>
                        <div>
                            <div className='cart-total-details'>
                                <p>Sub Total</p>
                                <p>Rs.{getTotalCartAmount()}/-</p>
                            </div>
                            <div className='cart-total-details'>
                                <p>PopCorn</p>
                                <p>Rs.{135}/-</p>
                            </div>
                            <div className='cart-total-details'>
                                <p><b>Total</b></p>
                                <b>Rs.{getTotalCartAmount()+135}/-</b>
                            </div>
                        </div>
                        {/* <Link to='/Bookings'><button>Process to Checkout</button>
                        </Link> */}

                        <button onClick={()=>navi('/bookings')}>Process to Checkout</button>
                    </div>
                    <div className='cart-promocode'>
                        <div>
                            <p>If you have a promo code, Please enter it here</p>
                            <div className='cart-promocode-input'>
                                <input type='text' placeholder='promocode'/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
            </div>

        </div>
    )
}

export default Cart
