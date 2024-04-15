import React from 'react';
import '../styles/Additems.css';


export default function Additems() {
  return (
    <div className='additemsform'>
      <h1>Add Vegetables</h1>
      <form>
        <div className="vegename">
          <label htmlFor="name">Vegetable Name</label>
          <input type="text" className="vegenamediv" id="name"  placeholder="Enter Vegetable Name" />
          {/* <small id="nameHelp" className="form-text text-muted"></small> */}
        </div>
        <div className="vegequantity">
          <label htmlFor="exampleInputQuantity">Quantity</label>
          <input type="number" className="vegequantitydiv" id="exampleInputQuantity" placeholder="Quantity" />
        </div>
        <div className="vegeprice">
          <label htmlFor="exampleInputPrice">Price</label>
          <input type="number" className="vegepricediv" id="exampleInputPrice" placeholder="Price" />
        </div>
        <div className="vegeimage">
          <label htmlFor="exampleFormControlFile1">Vegetable Image</label>
          <input type="file" className="vegeimagediv" id="exampleFormControlFile1" />
        </div>
        <button type="submit" className="btnn">Submit</button>
      </form>
    </div>
  );
}
