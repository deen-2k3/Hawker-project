import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Homenavbar from './Homenavbar';

export default function NewHawkerDetails() {
  const [titleName, setTitleName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [mbNumber, setMbNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const owner = '663a6c6eeb2222fccd173057'; // Replace with actual owner ID logic
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hawkerData = { titleName, ownerName, mbNumber, address, image, owner };

    axios.post('http://localhost:8080/newhawker', hawkerData)
      .then(result => {
        console.log('Server response:', result.data);
        navigate('/hawkerdashboard'); // Replace '/success' with the path you want to navigate to
      })
      .catch(err => {
        if (err.response) {
          console.error('Error response data:', err.response.data);
          console.error('Error response status:', err.response.status);
          console.error('Error response headers:', err.response.headers);
        } else if (err.request) {
          console.error('Error request:', err.request);
        } else {
          console.error('Error message:', err.message);
        }
      });
  };

  return (
    <div>
      <Homenavbar/>
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <p>SignUp</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="text">Title</label>
            <input type="text" placeholder='Title' className="form-control rounded-0"
              value={titleName} onChange={(e) => setTitleName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="text">Owner Name</label>
            <input type="text" placeholder='Name' className="form-control rounded-0"
              value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="number">Contact No.</label>
            <input type="number" placeholder='Contact No.' className="form-control rounded-0"
              value={mbNumber} onChange={(e) => setMbNumber(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="text">Address</label>
            <input type="text" placeholder='Enter Address' className="form-control rounded-0"
              value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="image">Image</label>
            <input type="url" placeholder='Upload Image' className="form-control rounded-0"
              value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <button className='btn btn-success w-100'>Register</button>
          <p>You are agreeing to our terms and policies</p>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}
