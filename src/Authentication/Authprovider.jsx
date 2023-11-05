import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup , signOut ,getAuth, onAuthStateChanged} from "firebase/auth";
// ---------***context***----------
export const AuthContext=createContext(null);
const auth= getAuth(app)

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);


    // ********* create user  ***********
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

// ********* Login ***********
const signIn=(email,password)=>{
    setLoading(true);
     return signInWithEmailAndPassword(auth,email,password);
  }

//   ********* logout ***********
const logOut=()=>{
    setLoading(true) 
      return signOut(auth);
  }
// ************ google signin**********
const signInWithGoogle = async () => {
    setLoading(true)
      const provider = new GoogleAuthProvider();
  
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        setUser(user); 
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    };

    //-------   *** Data send child *** ---------
    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        children: PropTypes.node.isRequired,
       </AuthContext.Provider>
    );
};

export default Authprovider;