// import React from 'react'
import './SigninPopup.css'
import { assets } from '../../assets/assets'
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'
import axios from 'axios'




const SigninPopup = ({setShowSignin}) => {

    const{url,token,setToken}=useContext(StoreContext);

    const [currState, setCurrstate] = useState('Sign up')

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setData(data=>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

        const onLogin=async(e)=>{
            e.preventDefault()
            console.log('onlogin function');

            let newurl=url;
            if(currState==='Login'){
                newurl+="/api/user/login"
            }
            else{
                newurl+="/api/user/register"
            }
            const resp=await axios.post(newurl,data);
            console.log(resp);
            if(resp.data.success){
                setToken(resp.data.token);
                localStorage.setItem('token',resp.data.token);
                setShowSignin(false)
            }
            else{
                alert(resp.data.message)
            }
        }
    return (
        <div className='loginpopup'>
            <form onSubmit={onLogin} action='' className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img className="crossicon" onClick={() => setShowSignin(false)} src={assets.cross} alt='crossicon' />
                    <div className='' login-popup-inputs>
                        {currState === 'Sign up' ?
                            <input type='text' placeholder='Your Name' name='name' required onChange={onChangeHandler}  value={data.name}/> : <></>}
                        <input type='email' name='email' id='email' placeholder='Your Email' required onChange={onChangeHandler} value={data.email} />
                        <input type='password' name='password' id='password' placeholder='password' required onChange={onChangeHandler} value={data.password} />
                        <button type='submit'>{currState === 'Sign up' ? 'Create Account' : 'Login'}</button>
                        {currState === 'Login' ? <p>Already have an Account?
                             <span onClick={()=>setCurrstate('sign up')}>Click Here</span></p> :
                            <p>already have an Account? <span onClick={()=>setCurrstate('Login')}>Login Here</span></p>}
                    </div>
                </div>

            </form>
        </div>

    )
}

export default SigninPopup
