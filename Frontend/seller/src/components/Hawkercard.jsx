import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Hawkercard.css'

const HawkerCard = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:8080/scard/vegetables')
            .then(response => {
                setVegetables(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div  className='card-container'>
            {vegetables.map(vegetable => (
                <div key={vegetable._id} className="card">
                    <h3>{vegetable.name}</h3>
                    <p>Quantity: {vegetable.quantity}</p>
                    <p>Price: ${vegetable.price}</p>
                    {vegetable.image && (
                        <img src={vegetable.image} alt={vegetable.name}/>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HawkerCard;
