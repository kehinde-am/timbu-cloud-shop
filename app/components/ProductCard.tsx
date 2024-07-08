import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  isNewArrival: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, rating, reviews, isNewArrival }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="border p-4 rounded-[30px] shadow-md relative bg-[#D9D9D9] w-full sm:w-80 h-96 sm:h-auto">
        {isNewArrival && (
          <div className="absolute top-3 right-3 bg-[#FFBB00] text-white px-2 py-1 rounded-full">
            Newest Arrivals
          </div>
        )}
        <div className="relative w-full h-40 sm:h-60 mt-4 sm:mt-14 mb-4 sm:mb-8">
          <Image src={image} alt={name} layout="fill" objectFit="contain" className="rounded-[20px]" />
        </div>
        <div className="flex justify-between items-center mt-auto w-full px-4 pb-4">
          <button className="bg-[#FFBB00] text-black py-2 px-4 rounded-lg font-bold">Add to Cart</button>
          <button aria-label="Add to Wishlist" className="relative w-8 h-8 ml-4">
            <Image src="/images/Add to Wishlist.png" alt="Add to Wishlist" layout="fill" objectFit="contain" />
          </button>
        </div>
      </div>
      <h3 className="text-lg font-bold mt-4 text-center">{name}</h3>
      <div className="flex items-center mt-2">
        <span className="text-[#FFBB00]">★</span>
        <span className="ml-1 text-[#FFBB00]">{rating}</span>
        <span className="text-gray-500 ml-2">({reviews} Reviews)</span>
      </div>
      <div className="text-xl font-bold mt-2">₦{price.toLocaleString()}</div>
    </div>
  );
};

export default ProductCard;
