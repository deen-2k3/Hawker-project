import React, { useEffect, useState } from 'react';
import '../styles/OrderHistory.css';

export default function OrderHistory(){
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
    <>
    {/* <Homenavbar/> */}
        <div className="container">
            {orders.map((order)=>(
                <div className="order" key={order._id}>
                <div className="orderImage">
                    <img src={order.image} alt={order.name} />
                    <p>{order.name}</p>
                    {/* <p>Image desciption</p> */}
                </div>
                <div className="amount_btn">
                    <button>-</button>
                    {order.quantity}
                    <button >+</button>
                </div>
                <div className="checkout_sec">
                    {/* <span>Rs-{item.price*item.quantity}</span> */}
                    {/* <button onClick={()=>deleteCart(item._id)}>Remove</button> */}
                </div>
            </div>
            ))}
        </div>
        </>
  );
};

