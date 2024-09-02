 


import React from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { saveToken } from './utils/getToken';
import animation from '../src/img/3125448-uhd_2560_1440_25fps.mp4'
import { useState } from 'react';
import './registerPage.css'
 const Registration = () => {
  
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const formData = { username, phoneNumber, email, password, confirmPassword };
    try {
      await axios.post('http://135.181.152.249:8072/Account/register', formData);
      window.location.href = '/login';
    } catch (error) {
      setError(error.message);
    }
  };

  const gotoLogin = () => {
    window.location.href = '/login';
  };
  const videos = [animation];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  

  return (
    <>
<video
  className='w-full h-[100vh]'
  style={{
    zIndex: "-1",
    width: "100vw",       // Ensure the video takes up the full viewport width
    height: "100vh",      // Keep the height to cover the full viewport height
    objectFit: "cover",   // Cover the entire area without distortion
    position: "fixed",    // Make sure it stays fixed in the background
    top: "0",
    left: "0",
  }}
  autoPlay
  loop
  muted
  src={randomVideo  }
/>
    <div className='mainbody' style={{position:'absolute',zIndex:"2",top:'0px',left:'550px'}}>
      <div className="wraper">
      <form onSubmit={handleRegister} className='registration-form'>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input-field text-[#ffffff] dark:text-[#ffffff]'
          style={{backgroundColor: "transparent", border: "1px solid white"}}
          
        />
        <input 
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className='input-field text-[#ffffff] dark:text-[#ffffff]'
          style={{backgroundColor: "transparent", border: "1px solid white"}}
        />
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input-field text-[#ffffff] dark:text-[#ffffff]'
          style={{backgroundColor: "transparent", border: "1px solid white"}}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input-field text-[#ffffff] dark:text-[#ffffff]'
          style={{backgroundColor: "transparent", border: "1px solid white"}}
        />
        <input 
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='input-field text-[#ffffff] dark:text-[#ffffff]'
          style={{backgroundColor: "transparent", border: "1px solid white"}}
        />
        {error && <p className='error-message'>{error}</p>}
        <button type="submit" className='register-button'>Register</button>
        <button type="button" onClick={gotoLogin} className='login-button'>Go to Login Page</button>
      </form>

</div>
    </div>
    </>
  )
}

export default Registration
