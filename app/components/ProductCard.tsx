import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, rating, reviews }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image 
        src={image} 
        alt={name} 
        width={176} 
        height={232} 
        className="w-full h-40 object-cover mb-4" 
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="flex items-center my-2">
        <span className="text-yellow-500">{rating}★</span>
        <span className="text-gray-500 ml-2">({reviews} Reviews)</span>
      </div>
      <div className="text-xl font-bold">₦{price}</div>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
