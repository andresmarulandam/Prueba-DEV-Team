import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './googleSignIn.css';

const GoogleSignIn = () => {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <button
      className={styles['google-sign-in-button']}
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
