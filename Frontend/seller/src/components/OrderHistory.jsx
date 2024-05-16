import React, { useEffect, useState } from 'react';
import '../styles/OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchItems = async()=>{
        try{
          const items = await fetch("http://localhost:8080/customer/orderHistory");
          const allItems = await items.json();
          setOrders(allItems);
        }
        catch(err){
          console.log(err);
        }
      }
      fetchItems();
  }, [orders]);

  return (
    <div className="order-history">
      <h1>Order History</h1>
      <div className="orders">
        {orders.map(order => (
          <div key={order._id} className="order-item">
            <img src={"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={order.title} className="order-image" />
            <div className="order-details">
              <h2>{order.title}</h2>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Price:</strong> RS-{order.price}</p>
              {order.location && <p><strong>Location:</strong> {order.location}</p>}
              {order.country && <p><strong>Country:</strong> {order.country}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
