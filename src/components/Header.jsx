import { useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
        console.log(error);
      });
  };

  // We use useEffect as this needs to be done only once
  useEffect(() => {
    // This onAuthStateChanged is a kind of event Listener as it keeps track of user logged in/logged out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="Logo" className="w-44"></img>
      {user && (
        <div className="flex p-2">
          <img
            src={user?.photoURL || USER_AVATAR}
            alt="usericon"
            className="w-12 h-12"
          ></img>
          <button className="mx-4 font-bold text-white" onClick={handleSignOut}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
