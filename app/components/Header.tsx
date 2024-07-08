import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-yellow-100 to-yellow-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-yellow-600">
            Home
          </Link>
          <Link href="/products" className="text-xl font-bold text-gray-700">
            Products
          </Link>
          <Link href="/contact" className="text-xl font-bold text-gray-700">
            Contact Us
          </Link>
        </div>
        <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Goldman' }}>
          HilltTech.
        </div>
        <div className="flex space-x-4">
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
      <div className="container mx-auto flex justify-between items-center mt-8 relative">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-[#07034B]" style={{ fontFamily: 'Dela Gothic One' }}>
            We are a major<br /> distributor of <br />Oppo phones and<br /> accessories in<br /> Nigeria.
          </h1>
        </div>
        <div className="w-1/2 flex justify-end relative">
          <div className="relative">
            <Image src="/images/reno.png" alt="Oppo phones" width={600} height={451} />
            <Image src="/images/oppo-buds.png" alt="Oppo buds" width={205.75} height={271.14} className="absolute bottom-[-1px] left-[-150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
