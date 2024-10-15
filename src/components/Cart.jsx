/* eslint-disable no-unused-vars */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => handleRemove(item.id)}
          onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
        />
      ))}
    </div>
  );
}

export default Cart;
