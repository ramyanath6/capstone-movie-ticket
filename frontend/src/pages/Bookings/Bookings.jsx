import React, { useContext } from 'react'
import './Bookings.css'
import { StoreContext } from '../../context/storeContext'





const Bookings = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form action='' className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Booking Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='text' placeholder='Email Address' />
        <input type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip Code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className='cart-total-details'>
              <p>Pop Corn</p>
              <p>Rs.{135}/-</p>
            </div>
            <div className='cart-total-details'>
              <p><b>Total</b></p>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>Process to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Bookings
