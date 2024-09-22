import React, { useEffect } from 'react'
import { LOGO, USER_ICON } from '../Utils/Constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../Redux/userSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      if(user){
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    })
    return () => unsubscribe();
  },[]);

  const handleSignOut = () => {
    signOut(auth)
      .then(()=> {})
      .catch((error)=> {})
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO} alt ="logo"/>
        {user && (<div className='flex p-2'>
          <img className='w-12 h-12' src= {USER_ICON} alt="user icon"/>
          <button onClick={handleSignOut} className='text-sm pb-3 px-4 text-white'> Sign Out {user?.displayName}</button>
        </div>)}
    </div>
  )
}

export default Header