// import React from 'react'
import './SigninPopup.css'
import { assets } from '../../assets/assets'
import React, { useState } from 'react'



const SigninPopup = ({setShowSignin}) => {

    const [currState, setCurrstate] = useState('Sign up')
    return (
        <div className='loginpopup'>
            <form action='' className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img className="crossicon" onClick={() => setShowSignin(false)} src={assets.cross} alt='crossicon' />
                    <div className='' login-popup-inputs>
                        {currState === 'Sign up' ?
                            <input type='text' placeholder='Your Name' required /> : <></>}
                        <input type='email' name='email' id='email' placeholder='Your Email' required />
                        <input type='password' name='password' id='password' placeholder='password' required />
                        <button>{currState === 'Sign up' ? 'Create Account' : 'Login'}</button>
                        {currState === 'Login' ? <p>Already have an Account <span onClick={()=>setCurrstate('sign up')}>Click Here</span></p> :
                            <p>already have an Account? <span onClick={()=>setCurrstate('Login')}>Login Here</span></p>}
                    </div>
                </div>

            </form>
        </div>

    )
}

export default SigninPopup
