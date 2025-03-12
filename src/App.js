import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Room from './Room'

const App = () => {
  return(
    <React.Fragment>
      <SignUp />
      <Login/>
      <Room />
    </React.Fragment>
  );
};
export default App;
