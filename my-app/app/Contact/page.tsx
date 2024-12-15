"use client"

import React from 'react';
import Image from "next/image";
import contactbanner from '../assets/high-angle-decoration-with-pink-paint_23-2148292511.jpg'; // Ensure it's a beautiful makeup-related banner
import Header from '../Components/Header';
import rightbutton from '../assets/right-button.png';
import location from '../assets/location.png';
import phone from '../assets/phone.png';
import clock from '../assets/clock.png';
import Footer from '../Components/Footer';

const Banner = () => {
    return (
        <div>
            <Header cartItems={[]} toggleCart={function (): void { throw new Error('Function not implemented.'); }} />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
                <Image
                    src={contactbanner}
                    alt="Banner"
                    className="w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center p-6">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">Contact Us</h2>
                    <div className="flex gap-4 justify-center">
                        <a href="/" className="text-white hover:text-pink-300 font-semibold">Home</a>
                        <Image src={rightbutton} alt="Arrow" width={20} />
                        <a href="/Contact" className="text-white hover:text-pink-300 font-semibold">Contact</a>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gradient-to-r from-pink-200 to-pink-400 min-h-screen flex items-center justify-center p-20 mt-20">
                <div className="bg-white rounded-xl shadow-xl max-w-4xl p-8 space-y-6 animate-fadeIn">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
                        Get in Touch with Us
                    </h1>
                    <p className="text-center text-gray-600">
                        Have questions, feedback, or collaboration ideas? We'd love to hear from you!
                    </p>

                    {/* Formspree Form */}
                    <form
                        action="https://formspree.io/f/movqrnrw" // Replace {form_id} with your Formspree form ID
                        method="POST"
                        className="space-y-6"
                    >
                        {/* Name Input */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-700 font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-gray-700 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                required
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-md transition-all transform hover:scale-105 shadow-md"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Details */}
                    <div className="text-center space-y-4">
                        <p className="text-gray-600">
                            <strong>Email:</strong> support@makeupglow.com
                        </p>
                        <p className="text-gray-600">
                            <strong>Phone:</strong> +1 (234) 567-8901
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-wrap justify-center gap-8 bg-pink-50 py-16 mt-20">
                <div className="w-full sm:w-1/3 lg:w-1/4 text-center bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center mb-4">
                        <Image src={location} alt="Location" width={40} height={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Studio</h3>
                    <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                </div>

                <div className="w-full sm:w-1/3 lg:w-1/4 text-center bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center mb-4">
                        <Image src={phone} alt="Phone" width={40} height={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                    <p className="text-gray-600">Hotline: (+84) 546-6789</p>
                </div>

                <div className="w-full sm:w-1/3 lg:w-1/4 text-center bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center mb-4">
                        <Image src={clock} alt="Clock" width={40} height={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Working Time</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Banner;
