import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../AuthService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        console.log(err);
      })
      .then((v) => {
        console.log(v);
        // '/' Roomに遷移
        navigate("/");
      });
  };

  if (user) {
    return <Navigate replace to="/" />;
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
