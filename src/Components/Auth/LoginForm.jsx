import React from 'react';
import {loginValidateInfo} from './validateInfo';
import {useLoginForm} from './useForm';
import './Form.css';

const Login = ({ submitForm, setLoginPage }) => {
  const {handleLogin, handleChange, handleSubmit, values, errors } = useLoginForm(
    submitForm,
    loginValidateInfo
  );


  // --------------------------
  // const handleLogin = async () => {

    // try {
    //   // Replace the following code with your actual login API call
    //   const response = await fetch('your-login-api-endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: values.username,
    //       password: values.password,
    //     }),
    //   });

    //   if (response.ok) {
    //     const userData = await response.json();

    //     // Assuming you have a function to handle successful login
    //     submitForm(userData);

    //     // Redirect or perform other actions after successful login
    //   } else {
    //     // Handle login failure, e.g., display an error message
    //     console.error('Login failed');
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    // }
  // };
  // -----------------------

  return (
    <div className='form-content-right'>
      {/* <form onSubmit={handleSubmit} className='form' noValidate> */}
      {/* <form onSubmit={proceedLogin} className='form' noValidate> */}
      <form onSubmit={(e) => handleSubmit(e)} className='form' noValidate>

        <h1>
          Get started with us today! Login  your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Mobile number as username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Already have an account? SignUp 
          <a   href='#' onClick={()=> setLoginPage((p)=> !p)} >here</a>
           
           {/* <a href='#'>here</a> */}
        </span>
      </form>
    </div>
  );
};

export default Login;
