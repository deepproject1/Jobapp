import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupLoading, setPopupLoading] = useState(false); // To block multiple popups

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch(error => {
        console.error("Create user error:", error);
        setLoading(false);
        throw error;
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch(error => {
        console.error("Sign in error:", error);
        setLoading(false);
        throw error;
      });
  };

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    });
  };

  const signInWithGoogle = () => {
    if (popupLoading) return; // Prevent multiple popups
    setPopupLoading(true);
    setLoading(true);

    return signInWithPopup(auth, googleProvider)
      .then(result => {
        setPopupLoading(false);
        setLoading(false);
        return result;
      })
      .catch(error => {
        console.error("Google sign-in error:", error);
        setPopupLoading(false);
        setLoading(false);
        throw error;
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .catch(error => {
        console.error("Logout error:", error);
        setLoading(false);
        throw error;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    }, error => {
      console.error("Auth observer error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    popupLoading,
    signInWithGoogle,
    createUser,
    signInUser,
    logOut,
    handleUpdateProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;