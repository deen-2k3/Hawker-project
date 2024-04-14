import '../styles/customerHome.css';
import sellerData from '../Data/customerHomedata';
import { useState, useEffect } from 'react';
import Homenavbar from './Homenavbar.jsx'
export default function CustomerHome() {
    const [items, setItems] = useState([
     { title:"",
      name:"",
      quantity:"",
      description:"",
      price:"",
      location:"",
      country:"",
    }
    ]);
    useEffect( () => {
      const fetchItems = async()=>{
        try{
          const items = await fetch("http://localhost:8080/customer/allitems")
        const allItems = await items.json();
          setItems(allItems);
        }
        catch(err){
          console.log(err);
        }
      }
      fetchItems();
    }, [])
    return (
        <>
        {/* <Homenavbar/> */}
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1" style={{"margin":"auto"}}>
                {items.map((item) => (
                    <div className="card col"  >
                    <img className="card-img-top" src="" alt={item.name} style={{"height":"10rem"}}/>
                    <div className="card-body" style={{"padding":"0"}}>
                      <div className='container' style={{'fontFamily':'serif'}}>
                      <p className="card-text">
                        {item.name} <br />
                        by- {item.title} <br />
                        RS- {item.price} <br />
                        <b>{item.location}, {item.country} </b>
                      </p>
                      </div>
                    </div>
                    <hr/>
                  </div>
                ))}
                </div>
        </>
    )
}