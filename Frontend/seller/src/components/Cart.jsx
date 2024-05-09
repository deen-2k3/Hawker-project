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
            const updatedItem= prevItems.map((item)=>{
                if(id===item.id){
                    return {...item, amount:item.amount+1}
                }
                return item;
            });
            axios.put(`http://localhost:8080/customer/cart/${id}`, updatedItem)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
            return updatedItem;
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
            return prevItems.filter(item => item.id!=id);
        })
    }
    
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await fetch("http://localhost:8080/customer/cart");
            const jsonData = await data.json();
            setItems(jsonData);
        }
        fetchdata();
    }, []);

    useEffect(()=>{
        handlePrice();
    }, []);

    return (
    <>
    {/* <Homenavbar/> */}
        <div className="cart">
            {items.map((item)=>(
                <div className="cart_box" key={item.id}>
                <div className="cartImage">
                    <img src={item.image} alt={item.Name} />
                    <p>{item.name}</p>
                    {/* <p>Image desciption</p> */}
                </div>
                <div className="amount_btn">
                    <button onClick={()=>decAmount(item.id)}>-</button>
                    {item.quantity}
                    <button onClick={()=>incAmount(item.id)}>+</button>
                </div>
                <div className="checkout_sec">
                    <span>Rs-{item.price*item.quantity}</span>
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