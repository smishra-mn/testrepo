import React, { useState } from 'react';
import './CartButton.css'; // Import your CSS file for styling

function CartButton(itemCount) {
    // Assume this is your cart state
    console.log("count%%" + itemCount)
    const [cartItems, setCartItems] = useState(3); // Initialize with a default value

    return (
        <div className="cart-button">
            <button className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h10.8a2 2 0 0 0 1.92-1.61L23 6H6"></path>
                </svg>
                <span className="item-count">{cartItems}</span>
            </button>
        </div>
    );
}

export default CartButton;