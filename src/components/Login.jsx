import React from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const toggleSignInForm = () => {

  }
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src={BG_URL} alt="background-image"></img>
      </div>
      <form className="w-3/12 relative p-12 bg-black mx-auto right-0 left-0 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          Sign In
        </button>
        <p className='py-4'>
          New to Netflix?
          <span className="font-semibold cursor-pointer hover:underline mx-2" onClick={toggleSignInForm}>Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
