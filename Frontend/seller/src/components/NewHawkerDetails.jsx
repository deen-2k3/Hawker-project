import axios from 'axios';
import React, { useState } from 'react'

export default function NewHawkerDetails() {
  const [hawkerName,setHawkerName]=useState();
  const [address,SetAddress]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/details',{hawkerName,address})
    .then(result=>{
      console.log(result)
      .catch(err=>console.log(err))
    })

  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '70vh' }}>
            <p>Hawker Personal Details</p>

       <div className='bg-white p-3 rounded w-25 border d-flex flex-column justify-content-center align-items-center'>

      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
          {/* <label htmlFor="text">Hawker Name</label> */}
          <input type="text" placeholder='Hawker Name' className="form-control  rounded-0"
          onChange={(e)=>setHawkerName(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor="text"></label>
          <input type="text" placeholder='Hawker Full Address' className="form-control  rounded-0"
          onChange={(e)=>SetAddress(e.target.value)}/>
        </div>
        
        {/* <button className='btn btn-default border w-100 bg-light'>Create Account</button> */}
      </form>
    </div>
    </div>
  )
}
