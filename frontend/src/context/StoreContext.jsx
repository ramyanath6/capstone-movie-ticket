import React, {createContext, useEffect, useState} from 'react'
// import { movie_list } from '../assets/assets';
import axios from 'axios'

export const StoreContext = createContext(null);


const StoreProvider=(props)=>{
    let url='http://localhost:4000'


    const [cartItems,setCartItems]=useState({});
    const [token,setToken]=useState('');
    const [movie_list,setMovieList]=useState([]);

    const loadCartData=async (token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    
    }
    

    useEffect(()=>{

        async function loadData(){
            await fetchMovieList();
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
                await loadCartData(localStorage.getItem('token'))
            }
        }
       loadData();
    },[])
    const fetchMovieList=async()=>{
        const response=await axios.get(url+'/api/list')
        setMovieList(response.data.data);
        console.log(response.data);
    }

const addToCart=async(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems(prev=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }

}
const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }

}

const getTotalCartAmount=()=>{
    let totalAmount=0;
        for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=movie_list.find((product)=>product._id===item);
           totalAmount+=itemInfo.price*cartItems[item];
        }
        }

        return totalAmount;
    }
       
        const contextValue={
            // fetchMovieList,
            movie_list,
            cartItems,
            addToCart,
            removeFromCart,
            setCartItems,
            getTotalCartAmount,url,token,setToken
    }

        return(
        <StoreContext.Provider value={contextValue}>
             {props.children}
        </StoreContext.Provider>
        )
}
export default StoreProvider
