import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice'; // Assuming these actions are in the cartSlice

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
    {cartItems.length > 0 ? (
      cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <div className="ml-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  className="bg-gray-200 px-2 py-1"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                >
                  -
                </button>
                <p className="mx-2">{item.quantity}</p>
                <button
                  className="bg-gray-200 px-2 py-1"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </div>
      ))
    ) : (
      <p>Your cart is empty</p>
    )}
  </div>
  );
};

export default Cart;
