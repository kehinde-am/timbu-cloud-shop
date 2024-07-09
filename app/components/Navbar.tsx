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
    return `text-xl font-bold ${isActive ? 'text-[#1B1A1A] pb-1 border-b-4 border-[#FFBB00]' : 'text-gray-700 hover:text-black'}`;
  };

  const showCartItemCount = pathname === '/cart';

  return (
    <div className="p-4 w-full relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            aria-label="Menu"
            className="text-gray-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="/icons/hamburger.svg" alt="Menu" width={24} height={24} layout="fixed" />
          </button>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={getLinkClass('/')}>Home</Link>
            <Link href="/products" className={getLinkClass('/products')}>Products</Link>
            <Link href="#" className={getLinkClass('/cont')}>Contact Us</Link>
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-900 mx-auto" style={{ fontFamily: 'Goldman' }}>
          HilltTech.
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-700">
              <Image src="/icons/search.svg" alt="Search" width={24} height={24} layout="fixed" />
            </button>
            <button aria-label="Favorites" className="text-gray-700">
              <Image src="/icons/heart.svg" alt="Favorites" width={24} height={24} layout="fixed" />
            </button>
            <div className="relative">
              <Link href="/cart">
                <div className="text-gray-700">
                  <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} layout="fixed" />
                  {showCartItemCount && cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-1 text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
            <button aria-label="User" className="text-gray-700">
              <Image src="/icons/profile.svg" alt="Profile" width={24} height={24} layout="fixed" />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white rounded-lg p-4 absolute w-full left-0 top-16 z-50">
          <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="block py-2" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <button aria-label="Search" className="block py-2" onClick={() => setMenuOpen(false)}>
            <Image src="/icons/search.svg" alt="Search" width={24} height={24} layout="fixed" />
          </button>
          <button aria-label="Favorites" className="block py-2" onClick={() => setMenuOpen(false)}>
            <Image src="/icons/heart.svg" alt="Favorites" width={24} height={24} layout="fixed" />
          </button>
          <Link href="/cart" className="block py-2" onClick={() => setMenuOpen(false)}>
            <div className="relative">
              <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} layout="fixed" />
              {showCartItemCount && cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-1 text-xs">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
          <button aria-label="User" className="block py-2" onClick={() => setMenuOpen(false)}>
            <Image src="/icons/profile.svg" alt="Profile" width={24} height={24} layout="fixed" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
