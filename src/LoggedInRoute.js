import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthService";

const LoggedInRoute = () => {
  const user = useContext(AuthContext);
  //Outlet:ログイン済み,Navigate:ログイン画面へ移動
  return user ? <Outlet /> : <Navigate replace to="/login" />;
};

export default LoggedInRoute;
