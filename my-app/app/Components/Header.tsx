'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import user from '../assets/user.png';
import logo from '../assets/logo.jpg';
import cart from '../assets/cart.png';

const Header = ({ cartItems, toggleCart }: { cartItems: any[]; toggleCart: () => void }) => {
  // Ensure cartItems is always an array
  const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;

  // State for handling the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 sm:px-16 w-full py-4   border-b-2">
      {/* Mobile menu toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black font-bold"
        >
          ☰
        </button>
      </div>
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>
      {/* Navigation */}
      <nav className={`flex items-center  space-x-10 text-gray-600 font-extrabold lg:flex ${isMenuOpen ? 'flex-col absolute bg-yellow-100 w-full left-0 top-20' : 'hidden'}`}>
        <a href="/" className="hover:text-pink-500 py-2 px-4 transition-all">Home</a>
        <a href="/Shop" className="hover:text-pink-500 py-2 px-4 transition-all">Shop</a>
        <a href="/About" className="hover:text-pink-500 py-2 px-4 transition-all">About</a>
        <a href="/Contact" className="hover:text-pink-500 py-2 px-4 transition-all">Contact</a>
      </nav>

      {/* Icons (User, Search, Wishlist, Cart) */}
      <div className="flex items-center space-x-10">
        <Link href="/Account">
          <Image src={user} alt="User" width={25} />
        </Link>

        <div onClick={toggleCart} className="relative cursor-pointer">
          <Image src={cart} alt="Cart" width={25} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;






