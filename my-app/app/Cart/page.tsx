'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/app/Components/Header';
import Footer from "@/app/Components/Footer";
import Image from 'next/image';
import Link from "next/link";
import contactbanner from "../assets/high-angle-decoration-with-pink-paint_23-2148292511.jpg";
import rightbutton from "../assets/right-button.png";
import del from "../assets/delete.png";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeItemFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <Header cartItems={cart} toggleCart={() => { }} />
      <div className="relative bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
        <Image
          src={contactbanner}
          alt="Banner"
          className="w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center p-6">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">Cart</h2>
          <div className="flex gap-4 justify-center">
            <a href="/" className="text-white hover:text-pink-300 font-semibold">Home</a>
            <Image src={rightbutton} alt="Arrow" width={20} />
            <a href="/Cart" className="text-white hover:text-pink-300 font-semibold">Cart</a>
          </div>
        </div>
      </div>

      <div className="cart-page pt-16 md:pt-28 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Side: Cart Items */}
          <div className="cart-items w-full lg:w-2/3">
            <div className="hidden md:flex justify-center gap-6 md:gap-28 py-2 rounded-md text-lg font-semibold mb-4 bg-red-50">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {cart.length === 0 ? (
              <div className="mt-10 text-center">
                <p>Your cart is empty. Add some products to the cart.</p>
                <Link href="/Shop" passHref>
                  <button className="mt-4 border-2 border-black px-6 py-2 rounded-xl hover:bg-pink-100">Go to Shop</button>
                </Link>
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item flex flex-col md:flex-row justify-between items-center py-6 border-b gap-4">
                    {/* Product Image and Details */}
                    <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg bg-pink-100" />
                      <div className="flex flex-col md:flex-row md:gap-6">
                        <h2 className="text-lg w-full md:w-52">{item.name}</h2>
                        <p className="text-gray-600">{item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}
                        className="px-2 py-1 border-2 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 border-2 rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="flex items-center gap-4">
                      <span>Rs. {parseFloat(item.price.replace(/[^\d.-]/g, "")) * item.quantity}</span>
                    </div>

                    {/* Remove Button */}
                    <div>
                      <button onClick={() => removeItemFromCart(item.id)} className="px-4 py-1">
                        <Image src={del} alt="Delete" width={30} height={30} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Cart Totals */}
          <div className="cart-totals w-full lg:w-1/3 pl-0 lg:pl-8">
            <div className="border p-6 md:p-8 rounded-lg bg-red-50">
              <h3 className="text-xl md:text-3xl font-bold mb-8 text-center">Cart Totals</h3>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="text-gray-500">Rs. {calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Total</span>
                <span className="text-pink-600">Rs. {calculateSubtotal()}</span>
              </div>

              <div className="mt-4 flex justify-center">
                <Link href="/Checkout">
                  <button className="border-4 mt-6 bg-pink-500 border-pink-400 text-white hover:bg-pink-300 transition-all hover:text-black py-4 px-16 rounded-full font-bold">Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 py-16 mt-10">
          <div className="container mx-auto text-center ">
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
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
