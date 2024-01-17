import React, { useState } from 'react';
// import './styles.css';
import './loginform.css'


const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignInClick = () => {
    setIsSignIn(true);
  };
  const handleSignUpClick = () => {
    setIsSignIn(false);
  };
  return (
    <div className={`container ${isSignIn ? 'slide' : ''}`}>
      <div className="box signin">
        <h2>Already have an account?</h2>
        <button className="signinBtn" onClick={handleSignInClick}>Sign In</button>
      </div>
      <div className="box signup">
        <h2>Don't have an account?</h2>
        <button className="signupBtn" onClick={handleSignUpClick}>Sign Up</button>
      </div>
      <div className="formBx">
        <div className={`form ${isSignIn ? 'signinform' : 'signupform'}`}>
          <form>
            <h3>{isSignIn ? 'Sign In' : 'Sign Up'}</h3>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            {!isSignIn && <input type="password" placeholder="Confirm password" />}
            <input type="submit" value={isSignIn ? 'Log In' : 'Register'} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;