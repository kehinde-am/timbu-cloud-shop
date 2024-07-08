import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  isNewArrival: boolean; // Add a new prop to indicate if the product is a new arrival
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, rating, reviews, isNewArrival }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border p-4 rounded-[30px] shadow-md relative bg-[#D9D9D9]" style={{ width: '310px', height: '408px' }}>
        {isNewArrival && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full">
            Newest Arrivals
          </div>
        )}
        <div className="relative w-full h-60 mb-12">
          <Image src={image} alt={name} layout="fill" objectFit="contain" className="rounded-[30px]" />
        </div>
        <div className="flex justify-between items-center mt-auto w-full">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">Add to Cart</button>
          <button aria-label="Add to Wishlist" className="relative w-10 h-20">
            <Image src="/images/Add to Wishlist.png" alt="Add to Wishlist" layout="fill" objectFit="contain" />
          </button>
        </div>
      </div>
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{rating}★</span>
        <span className="text-gray-500 ml-2">({reviews} Reviews)</span>
      </div>
      <div className="text-xl font-bold mt-2">₦{price.toLocaleString()}</div>
    </div>
  );
};

export default ProductCard;
