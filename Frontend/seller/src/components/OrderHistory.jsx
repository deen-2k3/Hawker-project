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
    <h1 style={{"textAlign":"center"}}>Order History</h1>
        <div className="container">
            {orders.map((order)=>(
                <div className="order" key={order._id}>
                <div className="orderImage">
                    <img src={order.image} alt={order.name} />
                    <div className='row1'>
                    {order.name}
                    </div>
                    <div className='row1'>
                    {order.title}
                    </div>
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

