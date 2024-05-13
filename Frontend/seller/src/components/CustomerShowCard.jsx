import React, { useEffect, useState } from 'react'
import "../styles/CustomerShowCard.css";
import Homenavbar from './Homenavbar.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function CustomerShowCard() {
    let {id} = useParams();
    const [item, setItem] = useState(
    { 
    title:"",
    name:"",
    quantity:"",
    description:"",
    price:"",
    location:"",
    country:"",
  })
  const addToCart= async()=>{
    try{
        await axios.post("http://localhost:8080/customer/cart/addItem", item);
        console.log("item is saved");
    }
    catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    const fetchItem = async()=>{
        try{
            const data = await fetch(`http://localhost:8080/customer/item/${id}`);
            const jsondata = await data.json();
            setItem(jsondata);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchItem();
  }, [item]);
    return (
        <>
        {/* <Homenavbar/> */}
            <div className='container py-5'>
                <div className='show_card row row-cols-lg-2 row-cols-md-2 row-cols-sm-1'>
                    <div >
                        <img src={"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={item.name} className='image' />
                    </div>
                    <div className='about'>
                    <h4 style={{"marginTop":"20px"}}>{item.title}</h4>
                        <h3 style={{"marginTop":"20px"}}>{item.name}</h3>
                        <div className="description" style={{"marginTop":"20px"}}>
                            <p>{item.description}</p>
                        </div>
                        <h5 style={{"marginTop":"20px"}}> <b>RS- {item.price}/Kg</b></h5>
                        <div className="buttons">
                    <button className="btn btn-outline-success button1" onClick={()=>addToCart()}>Add to cart</button>
                    <button className="btn btn-outline-success button2" >Buy</button>
                </div>
                    </div>

                </div>
            </div>
        </>
    )
}