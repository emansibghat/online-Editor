import React from 'react'
import logo from '../assets/images/logo.png'
import image from '../assets/images/authPageSide.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [username, setUsername]=useState('');
  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [email, setEmail]=useState('');

  const submitForm = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
        <img className='w-[200px]' src={logo} alt="" />
        <form onSubmit={submitForm} className='w-full mt-[60px]' action="">
              <div className="inputBox">
                <input  onChange={(e)=>{setUsername(e.target.value)}}value={username} type="text" placeholder='username' />
              </div>
              <div className="inputBox">
                <input onChange={(e)=>{setName(e.target.value)}}value={name}  type="text" placeholder='name' />
              </div>
              <div className="inputBox">
                <input onChange={(e)=>{setEmail(e.target.value)}}value={email}  type="text" placeholder='email' />
              </div>
              <div className="inputBox">
                <input onChange={(e)=>{setPassword(e.target.value)}}value={password}  type="text" placeholder='password' />
              </div>
              <p>Already have an account?<Link to='./login'>login</Link></p>
              <button className="btnBlue w-full mt-[20px]">SignUp</button>
            </form>
        </div>
        <div className="right">
         <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
