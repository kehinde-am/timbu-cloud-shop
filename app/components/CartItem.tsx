'use client';

import React from 'react';
import Image from 'next/image';

interface CartItemProps {
  item: {
    name: string;
    productNumber: string;
    color: string;
    price: number;
    image: string;
    quantity: number;
  };
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onQuantityChange, onRemove }) => {
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    onQuantityChange(item.quantity + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0">
      <div className="flex items-center">
        <div className="bg-[#D9D9D9] rounded-lg p-4 shadow flex justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
          <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{item.name}</h3>
          <p>Product Number: {item.productNumber}</p>
          <p>Colour: <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span></p>
          <p className="text-lg sm:text-xl font-bold text-black">₦{item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-[#FFBB00]">TOTAL</span>
        <span className="font-bold text-black">₦{(item.price * item.quantity).toLocaleString()}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={handleDecreaseQuantity} className="bg-gray-200 text-gray-700 p-1 text-sm sm:text-base">
          -
        </button>
        <span className="text-lg font-bold">{item.quantity}</span>
        <button onClick={handleIncreaseQuantity} className="bg-gray-200 text-gray-700 p-1 text-sm sm:text-base">
          +
        </button>
        <button onClick={onRemove} className="bg-[#E5E5E5] text-black rounded-full p-1 sm:p-2 flex items-center justify-center">
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
