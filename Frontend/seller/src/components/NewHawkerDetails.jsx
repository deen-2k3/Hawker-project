import React from 'react'

export default function NewHawkerDetails() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '70vh' }}>
            <p>Hawker Personal Details</p>

       <div className='bg-white p-3 rounded w-25 border d-flex flex-column justify-content-center align-items-center'>

      <form action="">
      <div className='mb-3'>
          {/* <label htmlFor="text">Hawker Name</label> */}
          <input type="text" placeholder='Hawker Name' className="form-control  rounded-0"/>
        </div>
        <div className='mb-3'>
          <label htmlFor="text"></label>
          <input type="text" placeholder='Hawker Full Address' className="form-control  rounded-0"/>
        </div>
        
        {/* <button className='btn btn-default border w-100 bg-light'>Create Account</button> */}
      </form>
    </div>
    </div>
  )
}
