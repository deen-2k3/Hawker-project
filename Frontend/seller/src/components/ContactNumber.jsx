import React from 'react'

export default function ContactNumber() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '20vh' }}>
    <p>Contact Number of Hawker</p>

<div className='bg-white p-3 rounded w-25 border d-flex flex-column justify-content-center align-items-center'>

<form action="">
<div className='mb-3'>
  {/* <label htmlFor="text">Hawker Name</label> */}
  <input type="tel" placeholder='Hawker mobile Number' className="form-control  rounded-0"maxLength={10}/>
</div>
<p style={{textAlign:'center'}}>or</p>
<div className='mb-3'>
  <input type="tel" placeholder='LandLine Number' className="form-control  rounded-0"maxLength={10}/>
</div>

{/* <button className='btn btn-default border w-100 bg-light'>Create Account</button> */}
</form>
</div>
</div>
  )
}
