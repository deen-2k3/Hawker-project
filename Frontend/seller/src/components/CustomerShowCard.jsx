import React, { useEffect, useState } from 'react'
import "../styles/CustomerShowCard.css";
import Homenavbar from './Homenavbar.jsx';
import { useParams } from 'react-router-dom';
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
  useEffect(()=>{
    // const data = {
    // title: "Green Vegetables",
    // name: "Spinachs",
    // image : "https://media.istockphoto.com/id/1440067299/photo/fresh-green-baby-spinach-leaves.jpg?s=1024x1024&w=is&k=20&c=NSYh_FyY0BNvfRfnSZ35EZFdzGrlpY1gouh7_RV4zds=",
    // quantity: 60,
    // description: "Fresh spinach leaves rich in iron and nutrients",
    // price: 30,
    // location: "New York",
    // country: "USA"
    // }
    // setItem(data);
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
  }, []);
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
                    <button className="btn btn-outline-success button1">Add to cart</button>
                    <button className="btn btn-outline-success button2" >Buy</button>
                </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
