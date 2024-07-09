import React from 'react';
import Image from 'next/image';
import NavBar from './Navbar';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-yellow-100 p-4">
      <NavBar />
      <div className="container mx-auto mt-8 relative flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#07034B]" style={{ fontFamily: 'Dela Gothic One' }}>
            We are a major<br /> distributor of <br />Oppo phones and<br /> accessories in<br /> Nigeria.
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-4 md:mt-0">
          <div className="relative">
            <Image src="/images/reno.png" alt="Oppo phones" width={300} height={225} className="md:w-auto" />
            <Image
              src="/images/oppo-buds.png"
              alt="Oppo buds"
              width={102.87}
              height={135.57}
              className="absolute bottom-[-20px] left-[50px] md:bottom-[-1px] md:left-[-60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
