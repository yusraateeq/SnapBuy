import React from 'react'
import Image from "next/image";
import sofa1 from '../assets/girle.jpeg';
import Link from 'next/link';

const Sofa = () => {
  return (
    <div className='bg-red-50 py-10 mt-20 mb-10'>
      <div className='flex flex-col md:flex-row items-center justify-around'>
        <div className='mb-8 md:mb-0 transition-all duration-500 transform hover:scale-105'>
          <Image src={sofa1} alt="Asgaard Sofa" width={500} className="object-cover" />
        </div>
        <div className='text-center md:text-left'>
          <h5 className='text-2xl sm:text-3xl'>Latest Collection</h5>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-4'>Glow with the Best</h2>
          <div className='flex items-center justify-center md:justify-start'>
            <Link href="/Shop"><button className='text-center border-2 py-3 px-8 sm:px-12 lg:px-16 mt-6 border-gray-400 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300'>
              Shop Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sofa;









// import React from 'react'
// import Image from "next/image";
// import makeupImage from '../assets/girle.jpeg'; // Ensure the image is related to makeup for a better match

// const MakeupProduct = () => {
//   return (
//     <div className='bg-gradient-to-r from-pink-100 via-pink-100 to-pink-50 py-10 mt-20 mb-10'>
//       <div className='flex flex-col md:flex-row items-center justify-around'>
//         {/* Image Section */}
//         <div className='mb-8 md:mb-0 transition-all duration-500 transform hover:scale-105'>
//           <Image
//             src={makeupImage}
//             alt="Makeup Product"
//             width={500}
//             height={400}
//             className="object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className='text-center md:text-left'>
//           <h5 className='text-xl sm:text-2xl font-semibold text-pink-400'>
//             Latest Collection
//           </h5>
//           <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mt-4'>
//             Glow with the Best - Makeup Essentials
//           </h2>
//           <p className='text-lg sm:text-xl mt-4 text-gray-700'>
//             Discover the perfect makeup products that highlight your beauty with our premium collection.
//           </p>
//           <div className='flex items-center justify-center md:justify-start'>
//             <button className='text-center border-2 py-3 px-8 sm:px-12 lg:px-16 mt-6 border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300'>
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MakeupProduct;
