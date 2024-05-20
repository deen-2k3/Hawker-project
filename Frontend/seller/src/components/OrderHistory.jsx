import React, { useEffect, useState } from 'react';
import '../styles/OrderHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  const deleteHistory = async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/customer/orderHistory/${id}`);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetch("http://localhost:8080/customer/orderHistory");
        const allItems = await items.json();
        setOrders(allItems);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  }, [orders]);

  return (
    <>
      <h1 style={{ "textAlign": "center" }}>Order History</h1>
      <div className="container">
        {orders.map((order) => (
          <div className="order" key={order._id}>
            <div className="orderImage">
              <img src={order.image} alt={order.name} />
              {/* <div className='row1'>
                    {order.name}
                    </div>
                    <div className='row1'>
                    {order.title}
                    </div> */}
              {/* <p>Image desciption</p> */}
            </div>
            <div>
              <div className='row1'>
                {order.name}
              </div>
              <div className='row2'>
                From-
                {order.title}
              </div>
            </div>
            <div className='details'>
              <div className='row1'>
                {order.quantity} units purchased by you
              </div>
              <div className='row2'>
                on-
                {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
            <div className='delete'>
            <button className="btn btn-outline-danger" onClick={()=>deleteHistory(order._id)}>Remove <FontAwesomeIcon icon={faTrash} /></button>
            </div>
            {/* <div className="checkout_sec"> */}
            {/* <span>Rs-{item.price*item.quantity}</span> */}
            {/* <button onClick={()=>deleteCart(item._id)}>Remove</button> */}
            {/* </div> */}
          </div>
        ))}
        &nbsp;
        &nbsp;
      </div>
    </>
  );
};

