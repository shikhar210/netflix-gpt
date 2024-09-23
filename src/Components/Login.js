import React, { useRef, useState } from 'react'
import Header from './Header'
import { LOGIN_BG } from '../Utils/Constants'
import { validateData } from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const error = validateData(email.current.value, password.current.value);
        setErrorMsg(error);
        if(error) return;
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredentials)=>{
                    const user = userCredentials.user;
                    updateProfile(user, {
                        displayName: fullName.current.value
                    })
                    .then(()=> {})
                    .catch((error) => {
                        setErrorMsg(error.message);
                    });
                })
                .catch((error)=> {
                    setErrorMsg(error.code + "-" + error.message);
                })
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredentials)=> {
                    const user = userCredentials.user;
                })
                .catch((error)=> {
                    setErrorMsg(error.code + "-" + error.message);
                })
        }
    }
  return (
    <div className='relative min-h-screen'>
        <Header/>
        <div className='absolute inset-0'>
            <img src={LOGIN_BG} alt ="logo" className='w-full h-full object-cover'/>
        </div>
        <div className='relative z-10 flex justify-center items-center min-h-screen'>
            <form
                onSubmit={(e)=>e.preventDefault()}
                className='w-full max-w-lg sm:w-8/12 md:w-6/12 lg:w-4/12 absolute p-6 sm:p-12 my-12 sm:my-36 mx-auto bg-black bg-opacity-80 text-white rounded-lg'
            >
                <h1 className='font-bold text-lg sm:text-2xl'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {
                !isSignInForm &&
                    <input
                        ref={fullName}
                        type='text'
                        placeholder='Full Name'
                        className='p-3 sm:p-4 my-4 w-full bg-gray-600 rounded font-normal text-sm sm:text-base'
                    />
                }
                <input
                    ref={email}
                    type='text'
                    placeholder='Email'
                    className='p-3 sm:p-4 my-4 w-full bg-gray-600 rounded font-normal text-sm sm:text-base'
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='p-3 sm:p-4 my-4 w-full bg-gray-600 rounded font-normal text-sm sm:text-base'
                />
                <p className='text-red-600'>{errorMsg}</p>
                <button
                    className='p-3 sm:p-4 my-4 w-full bg-red-700 rounded-lg text-sm sm:text-base hover:bg-red-600'
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className='py-4 text-xs sm:text-sm cursor-pointer'
                    onClick={toggleSignInForm}
                >
                        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login