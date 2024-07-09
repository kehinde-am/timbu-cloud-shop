'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const paths = pathname.split('/').filter(x => x);

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <nav className="text-[#1B1A1A] text-sm md:text-base">
          <Link href="/" className="hover:bg-[#FFBB00] font-bold">Home</Link>
          {paths.length > 0 && (
            <>
              {' / '}
              <Link href="/products" className="hover:bg-[#FFBB00] font-bold">Products</Link>
            </>
          )}
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            return (
              <span key={index} className="block md:inline">
                {' / '}
                {index === paths.length - 1 ? (
                  <span className="text-[#FFBB00] font-medium">{capitalize(path)}</span>
                ) : (
                  <Link href={href} className="hover:underline">{capitalize(path)}</Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
