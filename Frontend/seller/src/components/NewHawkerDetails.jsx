import axios from 'axios';
import React, { useState } from 'react';

export default function NewHawkerDetails() {
  const [titleName, setTitleName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [mbNumber, setMbNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/newhawker', { titleName, ownerName, mbNumber, address, image })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <p>SignUp</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="text">Title</label>
            <input type="text" placeholder='Title' className="form-control  rounded-0"
              value={titleName} onChange={(e) => setTitleName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="text">Owner Name</label>
            <input type="text" placeholder='Name' className="form-control  rounded-0"
              value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="number">Contact No.</label>
            <input type="number" placeholder='Contact No.' className="form-control  rounded-0"
              value={mbNumber} onChange={(e) => setMbNumber(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="text">Address</label>
            <input type="text" placeholder='Enter Address' className="form-control  rounded-0"
              value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="image">Image</label>
            <input type="url" placeholder='Upload Image' className="form-control  rounded-0"
              value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <button className='btn btn-success w-100'>Register</button>
          <p>You are Agree to our term and policies</p>
          {/* <button className='btn btn-default border w-100 bg-light'>Create Account</button> */}
        </form>
      </div>
    </div>
  );
}
