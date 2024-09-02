import React from 'react';
import './login.css'
const Login = () => {
  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  return (
    <div className='login_form'>
      <h2>Login Page</h2>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
