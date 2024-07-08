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
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="relative bg-[#D9D9D9] rounded-lg p-4 shadow" style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{item.name}</h3>
          <p>Product Number: {item.productNumber}</p>
          <p>Colour: <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.color.toLowerCase() }}></span></p>
          <p className="text-xl font-bold text-black">₦{item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-[#FFBB00]">TOTAL</div>
        <div className="font-bold text-black">₦{(item.price * item.quantity).toLocaleString()}</div>
      </div>
      <div className="flex items-center">
        <button onClick={handleDecreaseQuantity} className="bg-gray-200 text-gray-700 px-2 py-1">
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={handleIncreaseQuantity} className="bg-gray-200 text-gray-700 px-2 py-1">
          +
        </button>
      </div>
      <button onClick={onRemove} className="bg-[#E5E5E5] text-black rounded-full w-8 h-8 flex items-center justify-center ml-4">
        ✕
      </button>
    </div>
  );
};

export default CartItem;
