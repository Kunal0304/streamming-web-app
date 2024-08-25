import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import LoginForm from './LoginForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/logo5.png' alt='spaceship' />
        </div>

        {isSubmitted ? (
          <FormSignup submitForm={submitForm} setLoginPage={setIsSubmitted}/>
        ) : (
          <LoginForm submitForm={submitForm} setLoginPage= {setIsSubmitted} /> 
        )}
      </div>
    </>
  );
};

export default Form;
