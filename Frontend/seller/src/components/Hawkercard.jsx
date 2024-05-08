import React from 'react';
import '../styles/Hawkercard.css'; // Import CSS file
import sellerData from "../Data/customerHomedata.js";

export default function Hawkercard() {
  return (
    <div className="card-container">
      {sellerData.map((seller, index) => (
        <div className="card" key={index}>
          <img
            src={seller.image}
            alt={seller.name}
            width="300"
            height="200"
            loading="lazy"
          />
          <h2>{seller.name}</h2>
          <p>{seller.description}</p>
          <p>{`Rs.${seller.price} per kg`}</p>
        </div>
      ))}
    </div>
  );
}
