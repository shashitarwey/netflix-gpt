import { useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIssSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIssSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src={BG_URL} alt="background-image"></img>
      </div>
      <div className="min-h-screen flex">
        <form className="w-3/12 relative p-12 m-auto bg-black right-0 left-0 text-white bg-opacity-75">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            ></input>
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
          <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
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
