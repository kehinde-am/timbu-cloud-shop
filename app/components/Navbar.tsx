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

  const cartItemCount = 3;

  if (!isClient) {
    return null;
  }

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-xl font-bold ${isActive ? 'text-[#1B1A1A] relative active-link' : 'text-gray-700'}`;
  };

  const showCartItemCount = pathname === '/cart';

  return (
    <div className=" p-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link href="/products" className={getLinkClass('/products')}>
            Products
          </Link>
          <Link href="/contact" className={getLinkClass('/contact')}>
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
                {showCartItemCount && cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-1 text-xs">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
          <button aria-label="User" className="text-gray-700">
            <Image src="/icons/profile.svg" alt="Profile" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
