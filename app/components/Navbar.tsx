'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="p-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center md:hidden">
          <button
            aria-label="Menu"
            className="text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="/icons/hamburger.svg" alt="Menu" width={24} height={24} />
          </button>
          <div className="text-3xl font-bold text-gray-900 ml-4" style={{ fontFamily: 'Goldman' }}>
            HilltTech.
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
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
        <div className="hidden md:flex justify-center flex-grow text-3xl font-bold text-gray-900" style={{ fontFamily: 'Goldman' }}>
          HilltTech.
        </div>
        <div className="hidden md:flex items-center space-x-4">
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
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg p-4 mt-4">
          <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="block py-2" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <button
            aria-label="Search"
            className="block text-gray-700 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
          </button>
          <button
            aria-label="Favorites"
            className="block text-gray-700 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/icons/heart.svg" alt="Favorites" width={24} height={24} />
          </button>
          <Link href="/cart" className="block py-2" onClick={() => setMenuOpen(false)}>
            <div className="relative">
              <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
              {showCartItemCount && cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-1 text-xs">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
          <button
            aria-label="User"
            className="block text-gray-700 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/icons/profile.svg" alt="Profile" width={24} height={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
