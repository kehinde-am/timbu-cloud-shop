import React from 'react';
import Image from 'next/image';
import NavBar from './Navbar';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-yellow-100 p-4">
      <NavBar />
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
