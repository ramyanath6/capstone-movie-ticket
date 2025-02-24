import React, { useEffect, useState } from 'react'
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Add = () => {
        const url='http://localhost:4000';

    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:""
    })
  
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
        
    }
  useEffect(()=>{
    console.log(image)
  },[image])

    const onSubmitHandler=async(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",data.price);
        formData.append("category",data.category);
        formData.append("image",image);
        const response=await axios.post (`${url}/api/add`,formData);
        if (response.data.success){
     

            setData({
                name:" ",
                description:" ",
                price:" ",
                category:" "
            })
         setImage(false);
            toast.success(response.data.message);
            console.log(error)
        }
        else{
            toast.error(response.data.message)   
             }

            // console.log("form submitted")
    }
    return (
        <div className='add'>
            <form className='flex-col' action="" onSubmit={onSubmitHandler}>
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image? URL.createObjectURL(image):assets.upload} alt="" />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])}type="file" id="image" hidden required />

                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} type="text" name='name' placeholder='Type here' />

                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} name="description" id="" rows="6" placeholder='Write Content here' required>

                    </textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category" id="">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi-NCR">Delhi-NCR</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Kochi">Kochi</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>product price</p>
                        <input onChange={onChangeHandler} type="Number" name='price' placeholder='Rs.150/-' />

                    </div>
                </div>
                <button type='submit' className='add-btn'>Add</button>

            </form>

        </div>
    )
}



export default Add
