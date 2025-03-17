import React, { useState } from "react";
import firebase from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      console.log(err);
    });
  };

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              //console.log(e.target.vlue);
            }}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <input name="name" id="name" placeholder="name" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </React.Fragment>
  );
};
export default SignUp;
