
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching product details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-6 flex flex-col md:flex-row md:space-x-6">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 rounded-lg shadow-lg"
      />
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
        <div className="mt-6">
          <Link to="/">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
