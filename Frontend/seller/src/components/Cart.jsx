import React, { useEffect, useState } from "react";
import vegetablesData from '../Data/cartData';
import '../styles/cart.css';
export default function Cart(){
    const [items, setItems] = useState([]);
    const[price, setPrice] = useState(0);
    const handlePrice = ()=>{
        let ans=0;
        items.map((item)=>{
            ans+=item.price*item.amount;
        })
        setPrice(ans);
    }
    
    useEffect(()=>{
        setItems(vegetablesData);
    }, []);

    useEffect(()=>{
        handlePrice();
    }, []);

    return (
    <>
        <div className="cart">
            {items.map((item)=>(
                <div className="cart_box">
                <div className="cartImage">
                    <img src={item.image} alt={item.Name} />
                    <p>{item.name}</p>
                    {/* <p>Image desciption</p> */}
                </div>
                <div className="amount_btn">
                    <button>+</button>
                    {item.amount}
                    <button>-</button>
                </div>
                <div className="checkout_sec">
                    <span>{item.price}</span>
                    <button>Remove</button>
                </div>
            </div>
            ))}
            <div className="total">
                <span className="total_des">The total price of the cart</span>
                <span className="total_price">{price}</span>
            </div>
        </div>
        </>
    )
}