import React, { useEffect, useState } from "react";
import vegetablesData from '../Data/cartData';
import '../styles/cart.css';
import Homenavbar from './Homenavbar.jsx'
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
    const incAmount =(id)=>{
        setItems(prevItems=>{
            return prevItems.map((item)=>{
                if(id===item.id){
                    return {...item, amount:item.amount+1}
                }
                return item;
            })
        }
        )
    }
    const decAmount = (id)=>{
        setItems(prevItems=>{
            return prevItems.map((item)=>{
                if(id==item.id){
                    return {...item, amount:item.amount-1}
                }
                return item;
            })
        })
    }
    const deleteCart = (id)=>{
        setItems(prevItems=>{
            prevItems.filter(item => item.id!=id);
        })
    }
    
    useEffect(()=>{
        setItems(vegetablesData);
    }, []);

    useEffect(()=>{
        handlePrice();
    }, []);

    return (
    <>
    <Homenavbar/>
        <div className="cart">
            {items.map((item)=>(
                <div className="cart_box">
                <div className="cartImage">
                    <img src={item.image} alt={item.Name} />
                    <p>{item.name}</p>
                    {/* <p>Image desciption</p> */}
                </div>
                <div className="amount_btn">
                    <button onClick={()=>decAmount(item.id)}>-</button>
                    {item.amount}
                    <button onClick={()=>incAmount(item.id)}>+</button>
                </div>
                <div className="checkout_sec">
                    <span>Rs-{item.price*item.amount}</span>
                    <button onClick={()=>deleteCart(item.id)}>Remove</button>
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