import React, { useState } from 'react'
import Header from './Header'
import { LOGIN_BG } from '../Utils/Constants'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={LOGIN_BG} alt ="logo"/>
        </div>
        <form className='w-4/12 absolute p-12 my-36 mx-auto bg-black right-0 left-0 text-white rounded-lg bg-opacity-80 text-sm'>
            <h1 className='font-bold text-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-600 font-normal'/>}
            <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-600 font-normal'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600 font-normal'/>
            <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login