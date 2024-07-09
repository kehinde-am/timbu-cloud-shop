'use client';

import React from 'react';
import Image from 'next/image';
import NavBar from './Navbar';
import Breadcrumb from './Breadcrumb';
import Link from 'next/link';
import cards from '../../public/images/cards.svg';
import '../style.css'; //

const Checkout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb />
      <div className="container mx-auto p-4 md:p-10">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="mb-4">
          <p className="text-lg font-medium">
            Returning Customer? <Link href="#"><span className="text-[#FFBB00]">Click Here to Login</span></Link>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#FF0000] font-medium">
            Note: all * fields are compulsory
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-8 font-bold">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <span className="bg-[#D9D9D9] text-[#1B1A1A] py-1 px-3 rounded-full">1</span>
            <span className="font-medium">Shopping Cart</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <span className="bg-[#FFBB00] text-[#1B1A1A] font-bold py-1 px-3 rounded-full">2</span>
            <span className="font-bold">Checkout</span>
          </div>
          <div className="flex items-center space-x-2 text-[#1B1A1A]">
            <span className="bg-[#D9D9D9] text-[#1B1A1A] py-1 px-3 rounded-full">3</span>
            <span className="font-medium">Order Complete</span>
          </div>
        </div>
        <form className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-2">1. Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block mb-1 font-bold">Full Name*</label>
                <input type="text" className="border-2 border-[#1B1A1A] p-2 rounded-md w-full" placeholder="John Doe" />
              </div>
              <div className="col-span-1">
                <label className="block mb-1 font-bold">Phone Number*</label>
                <input type="text" className="border-2 border-[#1B1A1A] p-2 rounded-md w-full" placeholder="+234 901 2345 678" />
              </div>
              <div className="col-span-2">
                <label className="block mb-1 font-bold">Email Address*</label>
                <input type="text" className="border-2 border-[#1B1A1A] p-2 rounded-md w-full" placeholder="someone@example.com" />
              </div>
              <div className="col-span-2">
                <label className="block mb-1 font-bold">Delivery Address*</label>
                <input type="text" className="border-2 border-[#1B1A1A] p-2 rounded-md w-full" placeholder="Example: 12, Ikeja Road, Lagos, Nigeria" />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-end">
              <input type="checkbox" className="mr-2" />
              <label>Save for next time</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">2. Delivery Method</h2>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
              <div className="flex items-start">
                <input type="radio" id="homeDelivery" name="deliveryMethod" className="mr-2 mt-1 custom-radio" />
                <div>
                  <label htmlFor="homeDelivery" className="font-medium">Home Delivery</label>
                  <p className="text-[#5F5B5B]">To be delivered to your delivery address above</p>
                  <p className="text-[#1B1A1A] font-medium">Estimated Delivery Time: 3 to 5 working days</p>
                  <p className="text-[#FFBB00] font-bold">COST: Based on delivery location</p>
                </div>
              </div>
              <div className="flex items-start">
                <input type="radio" id="shopPickup" name="deliveryMethod" className="mr-2 mt-1 custom-radio" />
                <div>
                  <label htmlFor="shopPickup" className="font-medium">Shop Pickup</label>
                  <p className="text-[#5F5B5B]">To be picked up by you at the physical branch</p>
                  <p className="text-[#1B1A1A] font-medium">Estimated Delivery Time: Nil</p>
                  <p className="text-[#FFBB00] font-bold">COST: Free</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">3. Payment Information</h2>
            <div>
              <input type="radio" id="bankTransfer" name="paymentMethod" className="mr-2 custom-radio" />
              <label htmlFor="bankTransfer" className="font-medium">Bank Transfer</label>
              <div className="ml-6 mt-2">
                <p>Account Name: <span className="font-bold">HilltTech Inc.</span></p>
                <p>Bank Name: <span className="font-bold">FirstBank PLC</span></p>
                <p>Account Number: <span className="font-bold">0123456789</span></p>
              </div>
            </div>
            <div className="mt-2">
              <input type="radio" id="payViaCard" name="paymentMethod" className="mr-2 custom-radio" />
              <label htmlFor="payViaCard" className="font-medium">Pay via Card</label>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Cardholder Name*</label>
                <input type="text" className="border-2 border-black p-2 rounded-md w-full" placeholder="John Doe" />
              </div>
              <div className="relative">
                <label className="block mb-1 font-medium">Card Number*</label>
                <div className="relative">
                  <input type="text" className="border-2 border-black p-2 rounded-md w-full pl-12" placeholder="1234 1234 1234 1234" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Image src={cards} alt="Cards" width={160} height={80} />
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Expiry*</label>
                <input type="text" className="border-2 border-black p-2 rounded-md w-full" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block mb-1">CVV*</label>
                <input type="text" className="border-2 border-black p-2 rounded-md w-full" placeholder="CVV" />
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Save for next time</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">4. Order Notes</h2>
            <textarea className="border-2 border-black p-2 rounded-md w-full" rows={4} placeholder="Message"></textarea>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <label>I agree to the terms and conditions of the checkout process of HilltTech Inc.</label>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-8 items-center space-y-4 md:space-y-0">
            <Link href="/cart">
              <button className="bg-white border border-[#FFBB00] text-[#1B1A1A] font-bold py-2 px-4 rounded-lg">
                Back to Cart
              </button>
            </Link>
            <button type="submit" className="bg-[#FFBB00] text-[#1B1A1A] font-bold py-2 px-4 rounded-lg">
              Checkout
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
