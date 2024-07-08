"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: 'Oppo Reno A 77s',
      productNumber: 'HT008',
      price: 165000,
      quantity: 1,
      image: '/images/Rectangle 39.png',
      color: 'Orange',
    },
    {
      name: 'Oppo Enco W31',
      productNumber: 'HT007',
      price: 90000,
      quantity: 2,
      image: '/images/Rectangle 38.png',
      color: 'Black',
    },
    {
      name: 'Oppo Reno 11 5G',
      productNumber: 'HT003',
      price: 300000,
      quantity: 1,
      image: '/images/Rectangle 34.png',
      color: 'Green',
    },
  ]);

  const handleRemove = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleIncrease = (index: number) => {
    setCartItems(
      cartItems.map((item, i) => (i === index ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrease = (index: number) => {
    setCartItems(
      cartItems.map((item, i) => (i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 50000;
  const finalPrice = totalPrice - discount;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Shopping Cart</h1>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <span className="mr-2">1</span>
          <span>Shopping Cart</span>
        </div>
        <div className="mx-4">2</div>
        <div>Checkout</div>
        <div className="mx-4">3</div>
        <div>Order Complete</div>
      </div>
      <div className="border-t border-b py-4 mb-4">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            {...item}
            onRemove={() => handleRemove(index)}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
          />
        ))}
      </div>
      <div className="mb-4">
        <label htmlFor="promoCode" className="block mb-2">Promotional Code</label>
        <div className="flex items-center">
          <input id="promoCode" type="text" className="border p-2 w-full" />
          <button className="bg-yellow-500 text-black py-2 px-4">Apply</button>
        </div>
      </div>
      <div className="text-right mb-8">
        <p className="mb-2">Discount: ₦{discount.toLocaleString()}</p>
        <p className="text-2xl font-bold">Total: ₦{finalPrice.toLocaleString()}</p>
      </div>
      <div className="flex justify-between">
        <Link href="/products" className="border py-2 px-4">
          Continue Shopping
        </Link>
        <button className="bg-yellow-500 text-black py-2 px-4">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
