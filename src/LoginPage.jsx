 
import React from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { saveToken } from "../src/utils/getToken";
import animation from '../src/img/3125448-uhd_2560_1440_25fps.mp4'
import './LoginPage.css'
 const Login = () => {
  async function Login(e) {
    e.preventDefault();
    try {
    
    const {data}= await axios.post(
        "http://135.181.152.249:8072/Account/login",
        { userName: e.target.userName.value, password: e.target.password.value }
      );
    
      if (data.statusCode === 200) {
        navigate("/");
      }
      saveToken(data.data)    
    

    } catch (error) {
      console.log(error);
    }
  }

  const navigate=useNavigate()

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
<form className='text-white' onSubmit={Login}>
    <h1>Login</h1>
    <div className="input-box">
        <input type="text" name='userName' placeholder='User Name' required />
    </div>
    <div className="input-box">
        <input type="password"  name='password' placeholder='Password' required style={{backgroundColor: "transparent"}}/>
    </div>
    <div style={{display:"flex",marginTop:"-10px"}}>
    <div style={{marginLeft:"10px"}}>
      <input type="checkbox" style={{marginTop:"3px"}} />
      </div>
    <div style={{marginLeft:"10px"}}><p>Remember Me</p></div>

    </div>
    <button style={{marginTop:"20px"}} className="btn" type="submit">Login</button>
    <div className="register-link">
    <p className='blue text-white'>Dont have a account? <Link className='text-blue-500' to={'/register'}>Register</Link></p>
    </div>
</form>

</div>
    </div>
    </>
  )
}

export default Login
