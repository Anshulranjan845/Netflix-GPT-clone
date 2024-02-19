import { useState ,useRef } from 'react'
import { IMG_CDN_BG } from '../utils/Constants'
import Header from './Header'
import {ValidateForm} from "../utils/Validate"
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Login = () => {

  const[isSignIn, setIsSignIn] = useState(false);
  const[errormsg,setErrormsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  
  function handleSignIn(){
    setIsSignIn(!isSignIn);
  }

  function handleSubmit(){
    const message = ValidateForm(email.current.value, password.current.value);

    if(message) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Anshul",
            photoURL:"https://avatars.githubusercontent.com/u/57593459?v=4",
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

            })
            .catch((error) => {
              setErrormsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorCode + " " + errorMessage);
        });
    }
    else{

  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode + " " + errorMessage);
  });

    }
  }

  return (
    
      <div className='font-serif w-screen'>
        <Header />
       <div className='absolute overflow-x-hidden bg-opacity-50 w-screen'>
          <img src={IMG_CDN_BG}
               alt="logo"/>
        </div>
       <form onSubmit={(e)=>e.preventDefault()} className='absolute w-[400px] p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80'>
          <h2 className='text-white text-3xl font-semibold my-4'>{isSignIn?"Sign In":"Sign Up"}</h2>
          {!isSignIn && <input type="text" 
                 className='p-[12px] my-[9px] rounded-lg w-full text-md text-gray-200 bg-gray-700 mx-auto focus:outline-none' 
                 name="name" placeholder="Name"/>}
          <input type="text" 
                 ref={email}
                 className='p-[12px] my-[9px] rounded-lg w-full text-md text-gray-200 bg-gray-700 mx-auto focus:outline-none' 
                 name="name" placeholder="Email"/>
          <input 
                 type="password"
                 ref={password}
                 className='p-[12px] my-[9px] rounded-lg text-gray-200 text-md bg-gray-700 w-full focus:outline-none' 
                 name="password" placeholder="Password"/>
                <p className='text-red-500 font-bold text-md'>{errormsg}</p>
                
               <button onClick={handleSubmit} className='p-[12px] my-6 w-full bg-red-600 text-white rounded-lg'>{isSignIn?"Sign In":"Sign Up"}</button>
          <div className='flex'>
            <input type="checkbox" />SS
            <p className='text-gray-500 mx-2'>Remember me</p>
          </div>
          <div className='flex'>
            <legend className='text-gray-500 text-md mt-8 hover:underline hover:text-gray-500'>{isSignIn?"New to Netflix?":"Already a member?"} </legend>
            <legend className='text-gray-200 text-md font-bold mt-8 cursor-pointer'onClick={handleSignIn}> {isSignIn?"Sign up now.":"Sign in"}</legend>
          </div>
        
         </form>
       
      </div>
    )
}

export default Login
