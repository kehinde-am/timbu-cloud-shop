'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItemCount = 3; // This should be dynamically fetched based on your cart state

  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className={`text-xl font-bold ${isClient && pathname === '/' ? 'text-yellow-600' : 'text-gray-700'}`}>
            Home
          </Link>
          <Link href="/products" className={`text-xl font-bold ${isClient && pathname === '/products' ? 'text-yellow-600' : 'text-gray-700'}`}>
            Products
          </Link>
          <Link href="/contact" className={`text-xl font-bold ${isClient && pathname === '/contact' ? 'text-yellow-600' : 'text-gray-700'}`}>
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
          <div className="relative">
            <Link href="/cart">
              <div className="text-gray-700">
                <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF0000] text-white rounded-full px-1 text-xs">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
