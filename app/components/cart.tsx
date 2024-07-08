'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CartItem from './CartItem';

const cartItems = [
  {
    name: 'Oppo Reno A 77s',
    productNumber: 'HT008',
    color: 'Orange',
    price: 165000,
    image: '/images/Rectangle 40.png',
    quantity: 1,
  },
  {
    name: 'Oppo Enco W31',
    productNumber: 'HT007',
    color: 'Black',
    price: 90000,
    image: '/images/Rectangle 38.png',
    quantity: 2,
  },
  {
    name: 'Oppo Reno 11 5G',
    productNumber: 'HT003',
    color: 'Green',
    price: 300000,
    image: '/images/Rectangle 34.png',
    quantity: 1,
  },
];

const Cart: React.FC = () => {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(50000); // Static discount for demonstration purposes

  const handleQuantityChange = (index: number, quantity: number) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromoCode = () => {
    
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Shopping Cart</h1>
        <div className="flex space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FFBB00] text-white py-1 px-3 rounded-full">1</span>
            <span>Shopping Cart</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="bg-gray-200 text-gray-500 py-1 px-3 rounded-full">2</span>
            <span>Checkout</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="bg-gray-200 text-gray-500 py-1 px-3 rounded-full">3</span>
            <span>Order Complete</span>
          </div>
        </div>
        <div>
          {items.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onQuantityChange={(quantity) => handleQuantityChange(index, quantity)}
              onRemove={() => handleRemoveItem(index)}
            />
          ))}
        </div>
        <div className="flex justify-between items-start mt-8">
          <div className="flex flex-col">
            <label className="mb-2 font-bold">Promotional Code</label>
            <div className="flex items-center">
              <input
                type="text"
                value={promoCode}
                onChange={handlePromoCodeChange}
                className="border p-2 rounded-md"
                placeholder="Enter code"
              />
              <button
                onClick={handleApplyPromoCode}
                className="bg-[#FFBB00] text-white py-2 px-4 rounded-lg ml-2"
              >
                Apply
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#FFBB00] font-bold">Discount</div>
            <div className="text-black font-bold">₦{discount.toLocaleString()}</div>
            <div className="text-2xl font-bold mt-2 text-[#FFBB00]">TOTAL</div>
            <div className="text-2xl font-bold text-black">₦{(total - discount).toLocaleString()}</div>
            <button className="bg-[#FFBB00] font-bold text-black py-2 px-4 rounded-lg mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <Link href="/products">
            <button className="bg-white border border-[#FFBB00] font-bold text-black py-2 px-4 rounded-lg">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
