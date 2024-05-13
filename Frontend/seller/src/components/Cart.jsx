import React, { useEffect, useState } from "react";
import vegetablesData from '../Data/cartData';
import '../styles/cart.css';
import Homenavbar from './Homenavbar.jsx'
import axios from 'axios';
export default function Cart(){
    const [items, setItems] = useState([]);
    const[price, setPrice] = useState(0);
    const handlePrice = ()=>{
        let ans=0;
        items.map((item)=>{
            ans+=item.price*item.quantity;
        })
        setPrice(ans);
    }
    const incAmount =(id)=>{
        // setItems(prevItems=>{
        //     return prevItems.map((item)=>{
        //         if(id===item.id){
        //             return {...item, amount:item.amount+1}
        //         }
        //         return item;
        //     })
        // })
        const fetchItem = async()=>{
            try{
                const data = await fetch(`http://localhost:8080/customer/cart/${id}`);
                const jsondata = await data.json();
                {jsondata.quantity += 1};
                await axios.put(`http://localhost:8080/customer/cart/${id}`, jsondata)
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                })

            }
            catch(err){
                console.log(err);
            }
        }
        fetchItem();    
    }
    const decAmount = async(id)=>{
        // setItems(prevItems=>{
        //     return prevItems.map((item)=>{
        //         if(id==item.id){
        //             return {...item, amount:item.amount-1}
        //         }
        //         return item;
        //     })
        // })
        try{
            const fetchItem = await axios.get(`http://localhost:8080/customer/cart/${id}`);
            const item = fetchItem.data;
                if(item.quantity>0){
                    item.quantity =item.quantity -1;
                }
            await axios.put(`http://localhost:8080/customer/cart/${id}`, item);
        }
        catch(err){
            console.log(err);
        }
    }
    const deleteCart = async(id)=>{
        // setItems(prevItems=>{
        //     prevItems.filter(item => item.id!=id);
        // })
        try{
            await axios.delete(`http://localhost:8080/customer/cart/${id}`);
        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await fetch("http://localhost:8080/customer/cart");
            const jsonData = await data.json();
            setItems(jsonData);
        }
        fetchdata();
    }, [items]);

    useEffect(()=>{
        handlePrice();
    }, [items]);

    return (
    <>
    {/* <Homenavbar/> */}
        <div className="cart">
            {items.map((item)=>(
                <div className="cart_box" key={item._id}>
                <div className="cartImage">
                    <img src={item.image} alt={item.Name} />
                    <p>{item.name}</p>
                    {/* <p>Image desciption</p> */}
                </div>
                <div className="amount_btn">
                    <button onClick={()=>decAmount(item._id)}>-</button>
                    {item.quantity}
                    <button onClick={()=>incAmount(item._id)}>+</button>
                </div>
                <div className="checkout_sec">
                    <span>Rs-{item.price*item.quantity}</span>
                    <button onClick={()=>deleteCart(item._id)}>Remove</button>
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