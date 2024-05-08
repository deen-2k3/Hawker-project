import React, { useState } from 'react';
import '../styles/Additems.css';
import axios from 'axios';


export default function Additems() {
  const [vegName,setVegName]=useState()
  const [quantity,setQuantity]=useState()
  const [price,setPrice]=useState()
  const [image,SetImage]=useState()

  const handleSubmit=(e)=>{
    e.peventDefault();
    axios.post('http://localhost:8080/additems',{vegName,quantity,price,image})
    .then(result=>{
      console.log(result)
      .catch(err=>console.log(err));
    })
  }

  return (
    <div className='additemsform'>
      <h1>Add Vegetables</h1>
      <form onSubmit={handleSubmit}>
        <div className="vegename">
          <label htmlFor="name">Vegetable Name</label>
          <input type="text" className="vegenamediv" id="name"  placeholder="Enter Vegetable Name" 
          onChange={(e)=>setVegName(e.target.value)}/>
          {/* <small id="nameHelp" className="form-text text-muted"></small> */}
        </div>
        <div className="vegequantity">
          <label htmlFor="exampleInputQuantity">Quantity</label>
          <input type="number" className="vegequantitydiv" id="exampleInputQuantity" placeholder="Quantity"
          onChange={(e)=>setQuantity(e.target.value)} />
        </div>
        <div className="vegeprice">
          <label htmlFor="exampleInputPrice">Price</label>
          <input type="number" className="vegepricediv" id="exampleInputPrice" placeholder="Price"
          onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div className="vegeimage">
          <label htmlFor="exampleFormControlFile1">Vegetable Image</label>
          <input type="file" className="vegeimagediv" id="exampleFormControlFile1" 
          onChange={(e)=>SetImage(e.target.value)}/>
        </div>
        <button type="submit" className="btnn">Submit</button>
      </form>
    </div>
  );
}
