import React from "react";
import '../styles/cart.css';
export default function Cart(){
    return (
        <div className="cart">
        <div className="cart_box">
            <div className="cartImage">
                <img src="https://media.istockphoto.com/id/1390936024/photo/the-concept-of-growing-food-fresh-organic-new-potatoes-in-a-farmers-field-a-rich-harvest-of.webp?b=1&s=170667a&w=0&k=20&c=1bqIXUZ93f2DitJThPhg0omlq7faC_8AjJDQQMn2_ms=" alt="" />
                <p>Image title</p>
                {/* <p>Image desciption</p> */}
            </div>
            <div className="amount_btn">
                <button>+</button>
                amount
                <button>-</button>
            </div>
            <div className="checkout_sec">
                <span>Item price</span>
                <button>Remove</button>
            </div>
        </div>
        <div>
            <span>The total price of the cart</span>
            <span>1234X</span>
        </div>
        </div>
    )
}