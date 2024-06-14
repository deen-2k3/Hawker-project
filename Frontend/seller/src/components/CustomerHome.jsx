import '../styles/customerHome.css';
import sellerData from '../Data/customerHomedata';
import { useState, useEffect } from 'react';
import Homenavbar from './Homenavbar.jsx';
import {Link} from 'react-router-dom';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

export default function CustomerHome() {
  const [items, setItems] = useState([
  //   { title:"",
  //    name:"",
  //    quantity:"",
  //    description:"",
  //    price:"",
  //    location:"",
  //    country:"",
  //  }
   ]);
   useEffect( () => {
    const fetchItems = async()=>{
      try{
        const items = await fetch("http://localhost:8080/customer/allitems");
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
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1" style={{"margin":"0"}}>
                {items.map((item) => (
                  <Link to={`/customerShowCard/${item._id}`} style={{"textDecoration":"none"}}>
                    <div className="card col"  key={item._id} style={{"width":"230px", "padding":"0", "marginRight":"0", "marginLeft":"0"}}>
                    <img className="card-img-top" src={item.image} alt={item.name} style={{"height":"10rem"}}/>
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
                </Link>
                ))}
                </div>
        </>
    )
}