import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchview } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch  = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () =>{
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchview());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      {user && <div className="flex p-2">
        {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) =>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
        </select>)}
        <button className="-py-4 px-1 mx-3 my-2 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        <img 
         className="w-12 h-12"
         alt="usericon"
         src={user?.photoURL}/>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
