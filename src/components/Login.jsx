import { useState, useRef } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import Header from './Header';
import { BG_URL, PROFILE_PIC, USER_AVATAR } from '../utils/constants';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIssSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the form Data
    // console.log(email.current.value, password.current.value)
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      // As Email or Password is not valid
      return;
    }

    // Sign in/ Sign up Logic

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_PIC,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
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
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    } else {
      // Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIssSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute h-screen">
        <img src={BG_URL} alt="background-image"></img>
      </div>
      <div className="min-h-screen flex">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 relative p-12 m-auto bg-black right-0 left-0 text-white bg-opacity-75"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
          <p className="text-red-500 text-xs py-2 font-bold">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-600 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="py-4">
            {isSignInForm ? 'New to Netflix?' : 'Already registered?'}
            <span
              className="font-semibold cursor-pointer hover:underline mx-2"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? 'Sign Up Now.' : 'Sign In Now.'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
