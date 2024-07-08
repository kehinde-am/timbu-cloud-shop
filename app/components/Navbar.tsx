'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const cartItemCount = 3; // This should be dynamically fetched based on your cart state

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className={`text-xl font-bold ${router.pathname === '/' ? 'text-yellow-600' : 'text-gray-700'}`}>Home</a>
          </Link>
          <Link href="/products">
            <a className={`text-xl font-bold ${router.pathname === '/products' ? 'text-yellow-600' : 'text-gray-700'}`}>Products</a>
          </Link>
          <Link href="/contact">
            <a className={`text-xl font-bold ${router.pathname === '/contact' ? 'text-yellow-600' : 'text-gray-700'}`}>Contact Us</a>
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
              <a className="text-gray-700">
                <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-1 text-xs">
                    {cartItemCount}
                  </span>
                )}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
