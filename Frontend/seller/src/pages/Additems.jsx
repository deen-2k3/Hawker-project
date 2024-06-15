import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Additems.css';

export default function Additems() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/additem', {
      title,
      name,
      quantity,
      image,
      description,
      price,
      location,
      country
    })
    .then(result => {
      console.log(result);
      // Clear form inputs after successful submission
      setTitle('');
      setName('');
      setQuantity('');
      setImage('');
      setDescription('');
      setPrice('');
      setLocation('');
      setCountry('');
      // Optionally provide user feedback that the submission was successful
    })
    .catch(err => {
      console.error('Error submitting form:', err);
      // Optionally display an error message to the user
    });
  };

  return (
    <div className='additemsform'>
      <h1>Add Vegetables</h1>
      <form onSubmit={handleSubmit}>
        <div className="stitle">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="stitlediv"
            id="title"
            placeholder="Enter Title Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="vegename">
          <label htmlFor="vegName">Vegetable Name</label>
          <input
            type="text"
            className="vegenamediv"
            id="vegName"
            placeholder="Enter Vegetable Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="vegequantity">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="vegequantitydiv"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="vegeimage">
          <label htmlFor="image">Vegetable Image</label>
          <input
            type="url"
            className="vegeimagediv"
            id="image"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="vegedescp">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="vegenamediv"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="vegeprice">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="vegepricediv"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="slocation">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="vegeimagediv"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="vcountry">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="vegeimagediv"
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit" className="btnn">Submit</button>
      </form>
    </div>
  );
}
