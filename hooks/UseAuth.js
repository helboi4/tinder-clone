import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import * as Google from "expo-auth-session/providers/google";
import {auth} from "../FirebaseService";
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth';
import { useMemo } from 'react';


const AuthContext = createContext({});

const config = {
    webClientId: "493498053962-k5vc5lhp9dighqvepj7sekmfs7pltleh.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"]
      
}

export const AuthProvider = ({children}) => {

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(config);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(user);
        }else{
          setUser(null);
        }
        console.log(user)
        setLoadingInitial(false);
      })

    }, []);


  const signInWithGoogle = async () => {
    setLoading(true);
    promptAsync()
    .then( async () =>{
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        await signInWithCredential(auth, credential);
      }
      return Promise.reject();
    })
    .catch(error => setError(error))
    .finally(setLoading(false))
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
    .catch(error => setError(error))
    .finally(setLoading(false))
  }

  const memoedValue = useMemo(() => ({
    user,
    loading,
    error,
    signInWithGoogle,
    logout
  }), [user, loading, error])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){
    return useContext(AuthContext)
}
