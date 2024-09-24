import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from '../Utils/Constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../Redux/userSlice'
import { toggleShowGptSearch } from '../Redux/gptSlice'
import { changeLanguage } from '../Redux/configSlice'
import { addSearchedMovies, addSearchedText } from '../Redux/moviesSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)

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
  },[dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(()=> {})
      .catch((error)=> {})
  }
  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  const handleGptSearch = () => {
    dispatch(toggleShowGptSearch())
    dispatch(addSearchedText(""))
    dispatch(addSearchedMovies(null))
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO} alt ="logo"/>
        {user && (<div className='flex p-2 justify-between'>
          {showGptSearch && (<select
            className='p-2 m-2 bg-gray-900 text-white'
            onChange={handleLanguageChange}
          >{
              SUPPORTED_LANGUAGES.map((language) => <option key={language.identifier} value={language.identifier}>{language.name}</option>)
            }
          </select>)}
          <button
            onClick={handleGptSearch}
            className='text-xs sm:text-sm text-white py-2 px-4 mx-4 my-2'
          >{showGptSearch ? "Home":"GPT Search 🔎"}</button>
          <img className='hidden md:block w-12 h-12' src= {USER_ICON} alt="user icon"/>
          <button onClick={handleSignOut} className='text-xs sm:text-sm text-white'> Sign Out {user?.displayName}</button>
        </div>)}
    </div>
  )
}

export default Header;