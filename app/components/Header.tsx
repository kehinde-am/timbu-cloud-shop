'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-yellow-100 to-yellow-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Goldman' }}>
          HilltTech.
        </div>
        <button aria-label="Menu" className="text-gray-700 md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className={`flex-col md:flex-row md:flex md:items-center ${menuOpen ? 'flex' : 'hidden'} md:space-x-4`}>
          <Link href="/" className="text-xl font-bold text-yellow-600">
            Home
          </Link>
          <Link href="/products" className="text-xl font-bold text-gray-700">
            Products
          </Link>
          <Link href="/contact" className="text-xl font-bold text-gray-700">
            Contact Us
          </Link>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button aria-label="Search" className="text-gray-700">
              <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
            </button>
            <button aria-label="Favorites" className="text-gray-700">
              <Image src="/icons/heart.svg" alt="Favorites" width={24} height={24} />
            </button>
            <Link href="/cart" className="text-gray-700">
              <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 relative">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-[#07034B]" style={{ fontFamily: 'Dela Gothic One' }}>
            We are a major<br /> distributor of <br />Oppo phones and<br /> accessories in<br /> Nigeria.
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative">
            <Image src="/images/reno.png" alt="Oppo phones" width={300} height={225} className="md:w-auto md:h-auto" />
            <Image src="/images/oppo-buds.png" alt="Oppo buds" width={102.875} height={135.57} className="absolute bottom-[-1px] left-[0px] md:left-[-150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
