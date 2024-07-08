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
    <div className="bg-gray-200 p-2">
      <div className="container mx-auto">
        {paths.map((path, index) => (
          <span key={index} className="text-gray-600">
            {index > 0 && ' / '}
            {index === paths.length - 1 ? (
              <span className="text-[#FFBB00] font-medium">{path}</span>
            ) : (
              <Link href={`/${paths.slice(0, index + 1).join('/')}`} className="hover:underline">
                {path}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
