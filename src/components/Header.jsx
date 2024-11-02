import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log('uuuu', user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
        console.log(error);
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="Logo" className="w-44"></img>
      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} alt="usericon" className="w-12 h-12"></img>
          <button className="mx-4 font-bold text-white" onClick={handleSignOut}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
