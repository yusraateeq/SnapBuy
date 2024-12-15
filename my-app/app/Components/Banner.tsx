import React from 'react';
import Image from "next/image";
import benner from '../assets/makeup.jpeg';

const Banner = () => {
  return (
    <div className="relative">
      {/* Image with reduced opacity */}
      <Image 
        src={benner} 
        alt="Banner" 
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[450px] object-cover opacity-40" 
      />
      
      {/* Text on top of the image */}
      <div className="absolute inset-0 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Our Instagram</h2>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>Follow our store on Instagram</p>
        <button className='rounded-full bg-white text-black outline-none py-2 px-6 sm:px-10 lg:px-12 mt-6 shadow-lg shadow-gray-500/50'>
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
