import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase'
import { LANGUAGE_CONSTANT, NETFLIX_CDN_USER } from '../utils/Constants';
import { changeLangValue } from '../utils/LanguageSlice';
import { addGptToggle } from '../utils/GptSearchToggleSlice';

const Header = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const GptTogglePage = useSelector(store =>store.GptSearchToggle.addGptToggle)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user) {
          const { email, uid, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount;
    return () => unsubscribe();
  }, []);

  // Function to toggle the button's visibility
  const handleButton = () => {
    setIsButtonVisible(!isButtonVisible); // Toggle the visibility
  };

  const handleToggleGpt =()=>{
    dispatch(addGptToggle());
  }
  const handleLangValue=(e)=>{
    dispatch(changeLangValue(e.target.value));
  };

  return (
    <div className='absolute z-40 bg-center text-white px-2 mx-2 w-screen bg-gradient-to-b from-black flex justify-between'>
      <img className='w-[180px]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
           alt="Netflix-logo" />
        {user && <div className='flex p-2 m-2'>
        <select className="bg-black m-2 p-2 bg-opacity-30 rounded-md" onChange={handleLangValue}>
        {LANGUAGE_CONSTANT.map(lang =><option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
    
        <button className="p-2 m-2 bg-violet-800 bg-opacity-50 rounded-lg" onClick={handleToggleGpt}>{GptTogglePage?"Home Page":"GPTSearch"}</button>
        <img 
                onClick={handleButton}
                className='h-[52px] mr-2 transition duration-300 delay-150 cursor-pointer'
                src={NETFLIX_CDN_USER}
                alt='img' />
                <button
                 onClick={handleSignOut}
                className={`bg-red-700 shadow-lg transition duration-300 delay-150 text-sm p-2 rounded-lg ${isButtonVisible ? '' : 'hidden'}`}>
                   Sign Out
                </button>
             
          </div> } 
    </div>
  )
}

export default Header
