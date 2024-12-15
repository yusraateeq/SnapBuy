"use client";

import React, { useEffect } from "react";
import Header from "../Components/Header";
import Link from "next/link";
import shop1 from "../assets/eye.jpg";
import shop2 from "../assets/eye1.jpg";
import shop3 from "../assets/eye2.jpg";
import shop4 from "../assets/eye3.jpg";
import shop5 from "../assets/eye4.jpg";
import shop6 from "../assets/shadow.jpg";
import shop7 from "../assets/blush.jpg";
import shop8 from "../assets/lipstick.jpg";
import shop9 from "../assets/blander.jpg";
import shop10 from "../assets/eyeshadow.jpg";
import shop11 from "../assets/mascara.jpg";
import shop12 from "../assets/pomade.jpg";
import shop13 from "../assets/shadow1.jpg";
import shop14 from "../assets/base1.jpg";
import shop15 from "../assets/base2.jpg";
import shop16 from "../assets/base3.jpg";
import Footer from "../Components/Footer";

// Import AOS library and CSS
import "aos/dist/aos.css";  
import AOS from "aos";  

const products = [
  { id: 1, name: "Glitter Eye Shadow", price: "Rs. 25,00.00", image: shop1 },
  { id: 2, name: "Glitter Eye Shadow", price: "Rs. 25,00.00", image: shop2 },
  { id: 3, name: "Blushon", price: "Rs. 20,00.00", image: shop3 },
  { id: 4, name: "Face Powder", price: "Rs. 18,00.00", image: shop4 },
  { id: 5, name: "Eye Shadow", price: "Rs. 15,00.00", image: shop5 },
  { id: 6, name: "Blushon", price: "Rs. 22,50.00", image: shop6 },
  { id: 7, name: "Blushon", price: "Rs. 25,10.00", image: shop7 },
  { id: 8, name: "Lipstick", price: "Rs. 25,20.00", image: shop8 },
  { id: 9, name: "Makeup Blander", price: "Rs. 25,00.00", image: shop9 },
  { id: 10, name: "Glitter Eye Shadow", price: "Rs. 20,00.00", image: shop10 },
  { id: 11, name: "Mascara", price: "Rs. 20,00.00", image: shop11 },
  { id: 12, name: "Lipstick", price: "Rs. 100,0.00", image: shop12 },
  { id: 13, name: "Shiny Eye Shadow", price: "Rs. 25,80.00", image: shop13 },
  { id: 14, name: "Face Powder", price: "Rs. 25,00.00", image: shop14 },
  { id: 15, name: "Face Powder", price: "Rs. 11,00.00", image: shop15 },
  { id: 16, name: "Glitter Blushon", price: "Rs. 24,00.00", image: shop16 },
];

const ProductSection = () => {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);

  return (
    <div>
      <Header cartItems={[]} toggleCart={function (): void { throw new Error("Function not implemented."); }} />

      <section className="py-16">
        <div>
          <div className="flex flex-wrap justify-between items-center mb-8 bg-red-50 w-full h-20 px-6 sm:px-16 lg:px-20">
            <h2 className="text-xl sm:text-2xl font-bold">Showing 1–4 of 40 results</h2>
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Filter</button>
              <div className="text-sm">
                <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
                <select id="sort" className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring">
                  <option value="default">Default</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-16 lg:px-20 mt-24">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg p-4 bg-white shadow-md" data-aos="fade-up">
                <Link href={`/Shop/${product.id}`}>
                  <div>
                    <img src={product.image.src} alt={product.name} className="w-full h-52 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold text-gray-500 mt-6">{product.name}</h3>
                    <p className="text-primary-500 text-lg font-bold mt-2">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-20">
            <button className="bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 p-4 px-6 rounded-lg">1</button>
            <button className="bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 p-4 px-6 rounded-lg">2</button>
            <button className="bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 p-4 px-6 rounded-lg">3</button>
            <button className="bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 p-4 px-6 rounded-lg">Next</button>
          </div>
        </div>
      </section>

      <div className="bg-pink-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            Transform Your Look Today!
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Let us redefine your beauty routine. Our premium-quality products are designed to help you feel confident and bring out your natural charm.
          </p>
          <Link href="/Shop">
            <button className="mt-8 px-8 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-500 transition-all duration-300">
              Discover Now
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductSection;
