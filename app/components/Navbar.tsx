import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const router = useRouter();
  const cartItemCount = 3; // This should be dynamically fetched based on your cart state

  return (
    <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className={`text-xl font-bold ${router.pathname === '/' ? 'text-yellow-600' : 'text-gray-700'}`}>
            Home
          </Link>
          <Link href="/products" className={`text-xl font-bold ${router.pathname === '/products' ? 'text-yellow-600' : 'text-gray-700'}`}>
            Products
          </Link>
          <Link href="/contact" className={`text-xl font-bold ${router.pathname === '/contact' ? 'text-yellow-600' : 'text-gray-700'}`}>
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
          <Link href="/cart" className="relative text-gray-700">
            <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button aria-label="User" className="text-gray-700">
            <Image src="/icons/user.svg" alt="User" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
