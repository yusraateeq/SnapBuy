"use client"

import React from 'react';
import Image from "next/image";
import contactbanner from '../assets/high-angle-decoration-with-pink-paint_23-2148292511.jpg';
import Header from '../Components/Header';
import rightbutton from '../assets/right-button.png';
import Footer from '../Components/Footer';
import Link from 'next/link';

const Banner = () => {
    return (
        <div>
            <Header cartItems={[]} toggleCart={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <div className="relative bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
                <Image
                    src={contactbanner}
                    alt="Banner"
                    className="w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center p-6">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">Account</h2>
                    <div className="flex gap-4 justify-center">
                        <a href="/" className="text-white hover:text-pink-300 font-semibold">Home</a>
                        <Image src={rightbutton} alt="Arrow" width={20} />
                        <a href="/Account" className="text-white hover:text-pink-300 font-semibold">Account</a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 mt-20">

                <div className="grid grid-cols-1 md:grid-cols-2 mt-28 gap-10 md:gap-16 lg:gap-44">
                    {/* Left Section (can be added later if needed) */}

                    {/* Right Section */}
                    <div className="bg-white rounded-lg p-6">
                        <form className="space-y-6">
                            <h2 className='text-3xl sm:text-4xl font-bold'>Log In</h2>
                            <div>
                                <label className="block text-lg mb-1 font-bold" htmlFor="email">
                                    Username or email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                />
                            </div>
                            <div className='flex items-center gap-6'>
                                <input type="checkbox" name="check" id="" width={40} />
                                <h6>Remember me</h6>
                            </div>
                            <div className='flex items-center gap-10 mt-10'>
                                <button
                                    type="submit"
                                    className="px-16 py-4 border-2 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                                >
                                    Log In
                                </button>
                                <h6>Lost Your Password?</h6>
                            </div>
                        </form>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <h2 className='text-3xl sm:text-4xl font-bold'>Register</h2>
                            <div>
                                <label className="block text-lg mb-1 font-bold" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                />
                            </div>
                            <p>A link to set a new password will be sent to your email address.</p>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-black font-bold'>privacy policy.</span></p>
                            <button
                                type="submit"
                                className="mt-8 px-16 py-4 border-2 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                            >
                                Register
                            </button>
                        </form>
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
            <Footer />
        </div>
    );
};

export default Banner;
