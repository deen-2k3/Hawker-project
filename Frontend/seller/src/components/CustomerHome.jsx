import '../styles/customerHome.css';
import sellerData from '../Data/customerHomedata';
import { useState, useEffect } from 'react';
import Homenavbar from './Homenavbar.jsx'
export default function CustomerHome() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(sellerData)
    }, [])
    return (
        <>
        {/* <Homenavbar/> */}
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1" style={{"margin":"auto"}}>
                {items.map((item) => (
                    <div className="card col"  >
                    <img className="card-img-top" src={item.image} alt="Card image cap" style={{"height":"10rem"}}/>
                    <div className="card-body" style={{"padding":"0"}}>
                      <p className="card-text">
                        {item.name} <br />
                        by- {item.title} <br />
                        RS- {item.price} <br />
                        <b>{item.location}, {item.country} </b>
                      </p>
                    </div>
                  </div>
                ))}
                </div>
        </>
    )
}