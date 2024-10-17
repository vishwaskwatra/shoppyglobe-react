import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      </Link>
      <p className="text-gray-500 mb-4">${product.price}</p>
      <div className="flex space-x-2">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add to Cart
        </button>
        <Link to={`/product/${product.id}`}>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;