"use client"

import React from 'react'
import Image from 'next/image'
import image1 from "../assets/blog1.jpg";
import admin from "../assets/admin.png";
import date from "../assets/day.png";
import tag from "../assets/tag.png";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from 'next/link';

const blog1 = () => {
    return (
        <div>
            <Header cartItems={[]} toggleCart={function (): void {
                throw new Error('Function not implemented.');
            } } />
            
            <div className='pt-24 pb-24 px-16 bg-gradient-to-r from-pink-400 to-purple-500 text-white'>
                <h2 className="text-5xl md:text-6xl font-bold text-center">The Secrets Behind Flawless Makeup: Tips for Every Skin Type</h2>
                <div className='flex items-center justify-center'>
                    <Image src={image1} alt='' width={900} height={600} className='mt-10 rounded-xl shadow-xl' />
                </div>
                <div className="flex items-center gap-6 mt-6 justify-center text-gray-200">
                    <div className="flex gap-2">
                        <Image src={date} alt="" width={25} />
                        <h6>Admin</h6>
                    </div>
                    <div className="flex gap-2">
                        <Image src={admin} alt="" width={25} />
                        <h6>14 Oct 2022</h6>
                    </div>
                    <div className="flex gap-2">
                        <Image src={tag} alt="" width={25} />
                        <h6>Beauty Tips</h6>
                    </div>
                </div>

                <div className='px-4 md:px-16 lg:px-56'>
                    <p className="text-lg mt-10 leading-relaxed">
                        When it comes to makeup, every individual’s skin is unique, and what works wonders for one person might not work as well for another. Understanding the key aspects of makeup application and tailoring your routine to your skin type can help you achieve flawless results every time. In this post, we will break down essential makeup tips for different skin types.
                    </p>

                    <h3 className='text-3xl md:text-4xl font-bold mt-8'>What Makes Makeup Look Flawless?</h3>
                    <p className='mt-5'>
                        Makeup that lasts all day and enhances your natural beauty starts with good skin preparation. Whether you have dry, oily, or combination skin, the first step is always to prime and prep your skin.
                    </p>

                    <h5 className='text-xl md:text-2xl font-bold mt-5'>1- Hydration is Key for Dry Skin</h5>
                    <p className='mt-5'>
                        If you have dry skin, always start with a hydrating primer and use a foundation that provides moisture. Avoid powder-based formulas and opt for creamy textures that lock in moisture, keeping your skin looking dewy and fresh.
                    </p>

                    <h5 className='text-xl md:text-2xl font-bold mt-5'>2- Oil-Free Products for Oily Skin</h5>
                    <p className='mt-5'>
                        For those with oily skin, it’s important to use oil-free foundations and setting sprays. These products help to mattify the skin and prevent shine throughout the day, giving you a flawless matte finish.
                    </p>

                    <h5 className='text-xl md:text-2xl font-bold mt-5'>3- Combination Skin Needs the Right Balance</h5>
                    <p className='mt-5'>
                        If your skin is a mix of dry and oily areas, focus on a balance of hydration and oil control. Use a lightweight foundation with a natural finish and apply setting powder to the oily zones to keep everything in place.
                    </p>

                    <h5 className='text-xl md:text-2xl font-bold mt-5'>4- Focus on Skin Care Before Makeup</h5>
                    <p className='mt-5'>
                        Skincare is an essential part of any makeup routine. Cleanse, exfoliate, and moisturize to create a smooth base for your makeup. Healthy skin ensures makeup glides on easily and lasts longer.
                    </p>

                    <h3 className='text-2xl md:text-3xl font-bold mt-8'>Essential Makeup Products Every Woman Should Have</h3>
                    <p className='mt-5'>
                        Every makeup lover needs a collection of products that can be used for various looks. From everyday natural beauty to glamorous night-outs, here are some essentials for every makeup bag:
                    </p>

                    <ul className='list-disc pl-5 mt-5'>
                        <li><strong>Foundation</strong> – Choose one that matches your skin tone and type.</li>
                        <li><strong>Concealer</strong> – To brighten the under-eye area and cover blemishes.</li>
                        <li><strong>Blush & Highlighter</strong> – To add a radiant glow and healthy flush.</li>
                        <li><strong>Lipstick</strong> – Pick a shade that complements your look.</li>
                        <li><strong>Setting Spray</strong> – To keep your makeup in place all day.</li>
                    </ul>

                    <h5 className='text-2xl md:text-3xl font-bold mt-8'>How Makeup Enhances Your Natural Beauty</h5>
                    <p className='mt-5'>
                        Makeup isn’t about changing who you are—it’s about enhancing your natural features. Whether it’s through a bold lip or a subtle highlight, makeup can empower you to express your personality and creativity.
                    </p>
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
    )
}

export default blog1;
