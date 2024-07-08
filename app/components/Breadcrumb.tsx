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

  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <nav className="text-black">
          <Link href="/" className="hover:underline">Home</Link>
          {paths.length > 0 && (
            <>
              {' / '}
              <Link href="/products" className="hover:underline">Products</Link>
            </>
          )}
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            return (
              <span key={index}>
                {' / '}
                {index === paths.length - 1 ? (
                  <span className="text-[#FFBB00] font-bold">{path}</span>
                ) : (
                  <Link href={href} className="hover:underline">{path}</Link>
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
