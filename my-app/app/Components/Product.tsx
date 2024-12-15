import React, { useEffect } from 'react';
import Image from "next/image";
import pro1 from '../assets/eye.jpg';
import pro2 from '../assets/eye1.jpg';
import pro3 from '../assets/eye2.jpg';
import pro4 from '../assets/eye4.jpg';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of animation
  }, []);

  return (
    <div className='pt-28 px-4 sm:px-10 md:px-20'>
      <div className='text-center'>
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-pink-600 font-extrabold text-center mb-6">
          Our New Products
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Find a bright ideal to suit your taste with our great selection of makeup essentials.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12'>
        {/* Product 1 */}
        <div 
          className='text-center border p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-10px]' 
          data-aos="fade-right" // AOS animation
        >
          <Image src={pro1} alt="Eye Shadow" className='h-60 w-full rounded-lg transition-transform duration-300' />
          <p className='mt-4 text-sm sm:text-base'>Eye Shadow</p>
          <h4 className='font-bold text-xl mt-2'>Rs. 2,000.00</h4>
        </div>

        {/* Product 2 */}
        <div 
          className='text-center border p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-10px]' 
          data-aos="fade-right" // AOS animation
          data-aos-delay="200" // Delay for staggered animation
        >
          <Image src={pro2} alt="Base" className='h-60 w-full rounded-lg' />
          <p className='mt-4 text-sm sm:text-base'>Base</p>
          <h4 className='font-bold text-xl mt-2'>Rs. 1,500.00</h4>
        </div>

        {/* Product 3 */}
        <div 
          className='text-center border p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-10px]' 
          data-aos="fade-right" // AOS animation
          data-aos-delay="400" // Delay for staggered animation
        >
          <Image src={pro3} alt="Eyeshadow" className='h-60 w-full rounded-lg' />
          <p className='mt-4 text-sm sm:text-base'>Eyeshadow</p>
          <h4 className='font-bold text-xl mt-2'>Rs. 1,800.00</h4>
        </div>

        {/* Product 4 */}
        <div 
          className='text-center border p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-10px]' 
          data-aos="fade-right" // AOS animation
          data-aos-delay="600" // Delay for staggered animation
        >
          <Image src={pro4} alt="Eyeshadow Palette" className='h-60 w-full rounded-lg' />
          <p className='mt-4 text-sm sm:text-base'>Eyeshadow Palette</p>
          <h4 className='font-bold text-xl mt-2'>Rs. 2,200.00</h4>
        </div>
      </div>

      <div className='flex items-center justify-center mt-12'>
        <Link href="/Shop">
          <button className='border-4 bg-pink-500 border-pink-400 text-white hover:bg-pink-300 transition-all hover:text-black py-4 px-16 rounded-full font-bold'>
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
