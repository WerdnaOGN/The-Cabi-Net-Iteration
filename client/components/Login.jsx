import React, { useState, useEffect } from 'react';


//need button for login
    //fetch request (post)
//button for sign up


export function LoginPage (props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('')
//sign up state here
  const [signup , toggleSignUp] = useState(false);

//deconstruct the props
  const { loginHandler } = props;

  //login/signup modals
  return (
    <div className ="main">
      <h1>Welcome to CABI.NET</h1>
      <div className="LoginDiv">
        <h2 id="loginHeader">{signup ? 'Sign Up!' : 'Login'}</h2>
        <div className="loginForm">
          <input type = "text" placeholder="username" value={username} onChange ={(e) => {setUsername(e.target.value)}} required/>
          <input type = "password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
        </div>
        <div className="loginSubmitContainer">
          <input type="submit" onClick={() => {loginHandler()}} className="loginButton"/>
        </div>
        { signup 
          ? <div> <p>Already have an account?</p><button onClick={() => {toggleSignUp(false)}}>Return to Login</button> </div> 
          : <div className="signupToggle"> <p>Don't have an account?</p><button onClick={() => {toggleSignUp(true)}}>Sign Up</button></div>     
        }
      </div> 
    </div>
  );
}