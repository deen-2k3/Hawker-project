// import react from 'react';

import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Homenavbar from "./Homenavbar";



function Register(){
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/signup',{name,email,password})
    .then(result => {
      console.log(result);
      if (result.status=== 200) {
        navigate('/'); // Navigate to the protected route
      }
    })
    .catch(err => console.log(err));
  }
    return (
      
   <div>
    <Homenavbar/>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <p>SignUp</p>

          <form onSubmit={handleSubmit}>
          <div className='mb-3'>
              <label htmlFor="text">Username</label>
              <input type="text" placeholder='Enter Username' className="form-control  rounded-0"
              onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter Email' className="form-control  rounded-0"
              onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter Password' className="form-control  rounded-0"
              onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className='btn btn-success w-100'>Register</button>
            <p>You are Agree to our term and policies</p>
            {/* <button className='btn btn-default border w-100 bg-light'>Create Account</button> */}
          </form>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }
  export default Register;
  