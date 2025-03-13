import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <h1>Login</h1>
      <form>
        <div>
          <input id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <input id="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
