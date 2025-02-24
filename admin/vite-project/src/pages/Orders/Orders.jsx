import React, { useEffect, useState } from 'react'
import './Orders.css';
import { useContext } from 'react';
import { StoreContext } from '../../../../../frontend/src/context/StoreContext';
import axios from 'axios';

const Orders = () => {

  const {getTotalCartAmount}=useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""

  })
  const onChangeHandler= async (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  useEffect(()=>{
      console.log(data);
    },[data])
    const paymentFunction=async (e)=>{
      e.preventDefault();
      console.log('payment function called!');
      let response=await axios.post('http://localhost:4000/api/orders/place',{},{headers:{token}});
      if(response && response.status===200){
        window.location.href=response.data.url
        console.log(response.data);
      }
      else{
        console.log('Error')
      }
    }
  

  return (
    
    <form onSubmit={paymentFunction} action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='First Name' required />
          <input type="text" name="lastName" onChange={onChangeHandler}  value={data.lastName} placeholder='Last Name' required />
        </div>
        <input type="text" name="email" onChange={onChangeHandler} value={data.email}   placeholder='Email address' required />
        <input type="text"    name='street' onChange={onChangeHandler} value={data.street} placeholder='Street'  required/>

        <div className="multi-fields" >
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'  required/>
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onChangeHandler}  value={data.zipcode} type="text" placeholder='Zip Code'  required/>

          <input type="text" onChange={onChangeHandler}  value={data.country} placeholder='Country' name='country'  required/>
        </div>
        <input type="text" onChange={onChangeHandler}  value={data.phone}placeholder='Phone' name='phone' required/>

      </div>
      <div className="place-order-right">

        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>{getTotalCartAmount()} </p>

            </div>
            <div className="cart-total-detials">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-total-details">
              <p><b>Total</b></p>
              <b>{getTotalCartAmount()+2}</b>

            </div>

          </div>
          <button type='submit'>Proceed to payment</button>
        </div>

      </div>
    </form>
  )
}


export default Orders
