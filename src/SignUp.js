import React from 'react';

const SignUp = () => {
  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form>
            <div>
                <input name="email" id="email" placeholder="Email" />
            </div>
            
            <div>  
                <input name="password" id="password" placeholder="Password" />
            </div>
            
            <div>  
                <input name="name" id="name" placeholder="name" />
            </div>
            <button>Sign Up</button>
      </form>
    </React.Fragment>
  );
};

export default SignUp;