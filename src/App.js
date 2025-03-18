import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LoggedInRoute />}>
            <Route path="/" element={<Room />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
