/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: {product.price} $</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
