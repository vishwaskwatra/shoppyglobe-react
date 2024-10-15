/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types
*/

import React from 'react';

function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: {item.price} $</p>
      <p>Quantity: 
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          min="1"
        />
      </p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
