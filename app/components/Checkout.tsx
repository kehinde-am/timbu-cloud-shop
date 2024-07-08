'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './Navbar'; // Ensure NavBar is imported correctly
import Breadcrumb from './Breadcrumb'; // Ensure Breadcrumb is imported correctly
import Subscribe from './Subscribe'; // Ensure Subscribe is imported correctly
import Footer from './Footer'; // Ensure Footer is imported correctly

const Checkout: React.FC = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('home');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(event.target.value);
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      <NavBar />
      <Breadcrumb />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-600 mb-4">
          Returning Customer? <span className="text-[#FFBB00]">Click Here to Login</span>
        </p>
        <div className="flex space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FFBB00] text-white py-1 px-3 rounded-full">1</span>
            <span>Shopping Cart</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="bg-[#FFBB00] text-white py-1 px-3 rounded-full">2</span>
            <span>Checkout</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="bg-gray-200 text-gray-500 py-1 px-3 rounded-full">3</span>
            <span>Order Complete</span>
          </div>
        </div>

        <form>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Delivery Information</h2>
            <div className="mb-4">
              <label className="block font-bold mb-1">Full Name*</label>
              <input type="text" className="border p-2 w-full rounded-md" placeholder="John Doe" />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block font-bold mb-1">Email Address*</label>
                <input type="email" className="border p-2 w-full rounded-md" placeholder="someone@example.com" />
              </div>
              <div className="w-1/2">
                <label className="block font-bold mb-1">Phone Number*</label>
                <input type="tel" className="border p-2 w-full rounded-md" placeholder="+234 901 2345 678" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">Delivery Address*</label>
              <input type="text" className="border p-2 w-full rounded-md" placeholder="Example: 12, Ikeja Road, Lagos, Nigeria" />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Save for next time
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Delivery Method</h2>
            <div className="flex space-x-4 mb-4">
              <label className="flex items-center">
                <input type="radio" value="home" checked={deliveryMethod === 'home'} onChange={handleDeliveryChange} className="mr-2" />
                Home Delivery
              </label>
              <label className="flex items-center">
                <input type="radio" value="pickup" checked={deliveryMethod === 'pickup'} onChange={handleDeliveryChange} className="mr-2" />
                Shop Pickup
              </label>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <p>To be delivered to your delivery address above</p>
                <p>Estimated Delivery Time: 3 to 5 working days</p>
                <p className="font-bold">COST: ₦10,500.00</p>
              </div>
              <div className="w-1/2">
                <p>To be picked up by you at the physical branch</p>
                <p>Estimated Delivery Time: Nil</p>
                <p className="font-bold">COST: Free</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Payment Information</h2>
            <div className="flex space-x-4 mb-4">
              <label className="flex items-center">
                <input type="radio" value="bank" checked={paymentMethod === 'bank'} onChange={handlePaymentChange} className="mr-2" />
                Bank Transfer
              </label>
              <label className="flex items-center">
                <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={handlePaymentChange} className="mr-2" />
                Pay via Card
              </label>
            </div>
            {paymentMethod === 'card' && (
              <>
                <div className="mb-4">
                  <label className="block font-bold mb-1">Cardholder Name*</label>
                  <input type="text" className="border p-2 w-full rounded-md" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-1">Card Number*</label>
                  <input type="text" className="border p-2 w-full rounded-md" placeholder="1234 1234 1234 1234" />
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block font-bold mb-1">Expiry*</label>
                    <input type="text" className="border p-2 w-full rounded-md" placeholder="MM/YY" />
                  </div>
                  <div className="w-1/2">
                    <label className="block font-bold mb-1">CVV*</label>
                    <input type="text" className="border p-2 w-full rounded-md" placeholder="CVV" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Save for next time
                  </label>
                </div>
              </>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Order Notes</h2>
            <textarea className="border p-2 w-full rounded-md" placeholder="Message"></textarea>
          </div>

          <div className="flex items-center mb-8">
            <input type="checkbox" className="mr-2" />
            <span>I agree to the terms and conditions of the checkout process of HilltTech Inc.</span>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Link href="/cart">
              <button className="bg-white border border-[#FFBB00] text-[#FFBB00] py-2 px-4 rounded-lg">
                Back to Cart
              </button>
            </Link>
            <button className="bg-[#FFBB00] text-white py-2 px-4 rounded-lg">
              Checkout
            </button>
          </div>
        </form>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Checkout;
