import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/product/productSlice';

const Header = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link to="/">ShoppyGlobe</Link> 
      </h1>
      
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="w-full px-4 py-2 text-gray-900 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6 6M21 11a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <nav className="space-x-4">
        <Link
          to="/"
          className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200"
        >
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
