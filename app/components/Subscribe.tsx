import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <div className="bg-[#07034B] text-white py-8">
      <div className="container mx-auto px-4">
        <form className="flex flex-col md:flex-row justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 md:mb-0 md:mr-4">
            Subscribe to our Newsletter
          </h2>
          <input
            type="email"
            placeholder="someone@example.com"
            className="p-2 rounded-md text-black w-full md:w-auto mb-4 md:mb-0 md:mr-4"
          />
          <button
            type="submit"
            className="bg-[#FFBB00] text-black font-bold py-2 px-4 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
