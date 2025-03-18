import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "./config/firebase";
import { auth } from "./config/firebase";
//user : ログイン済みのユーザーのオブジェクト

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //ユーザーのログイン時、ログアウト時に必ず呼び出されるメソッド
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
