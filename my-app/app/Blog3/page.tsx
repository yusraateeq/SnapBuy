"use client"

import React from 'react'
import Image from 'next/image'
import image1 from "../assets/blog3.jpg"; // Add the appropriate image path for makeup
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
            }} />
            <div className='pt-24 pb-24 px-16 bg-gradient-to-r from-pink-400 to-purple-500 text-white'>
                <h2 className="text-5xl md:text-6xl font-bold text-center">The Art of Makeup: Enhancing Natural Beauty</h2>
                <div className='flex items-center justify-center'>
                    <Image src={image1} alt='Makeup Tutorial' width={900} height={600} className='mt-10 w-full sm:w-3/4 md:w-1/2 rounded-lg shadow-xl' />
                </div>
                <div className="flex items-center gap-6 mt-6 justify-center text-sm sm:text-base">
                    <div className="flex text-gray-200 gap-2">
                        <Image src={date} alt="Date" width={25} />
                        <h6>Admin</h6>
                    </div>
                    <div className="flex text-gray-200 gap-2">
                        <Image src={admin} alt="Author" width={25} />
                        <h6>14 Oct 2022</h6>
                    </div>
                    <div className="flex text-gray-200 gap-2">
                        <Image src={tag} alt="Category" width={25} />
                        <h6>Beauty</h6>
                    </div>
                </div>
                <div className='px-4 sm:px-10 md:px-56'>
                    <p className="text-lg mt-10">
                        Makeup is not just about covering imperfections—it’s a form of self-expression and an art that enhances our natural beauty. From bold lips to flawless skin, makeup has the power to transform how we feel about ourselves. In this blog, we explore the beauty of makeup, why it's so empowering, and how you can use it to embrace your individuality.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>1. Makeup as a Form of Art</h5>
                    <p className='mt-5'>
                        Just like a painting, makeup is a medium for artistic expression. Each brush stroke, color choice, and blending technique is a way to showcase personality and creativity. Whether you prefer a natural, understated look or enjoy experimenting with bold colors, makeup allows you to tell a story through your face. The ability to transform with makeup is part of its magic.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>2. Confidence Through Makeup</h5>
                    <p className='mt-5'>
                        Many people turn to makeup for confidence. A perfectly sculpted contour, a touch of mascara, or a bright lipstick can make a world of difference in how you feel. Makeup has the power to highlight your best features, enhance your natural beauty, and help you face the world with a smile. It's not about hiding flaws—it's about embracing and enhancing what makes you unique.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>3. Skincare and Makeup: A Perfect Pair</h5>
                    <p className='mt-5'>
                        Healthy, glowing skin is the perfect canvas for makeup. But skincare is just as important as the makeup you choose to apply. A good skincare routine helps keep your skin hydrated, smooth, and prepared for makeup application. From cleansers and moisturizers to serums and sunscreens, taking care of your skin is the first step toward achieving flawless makeup that lasts all day.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>4. Makeup for Every Occasion</h5>
                    <p className='mt-5'>
                        Makeup is versatile—it can be as bold or subtle as you like, and it’s the perfect addition for any occasion. Whether it’s a glamorous evening out, a professional workday, or a casual get-together with friends, there’s a makeup look for every event. From a natural "no-makeup" look to a full-glam transformation, makeup can be customized to suit your mood and the moment.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>5. Sustainable Beauty: Embracing Eco-Friendly Makeup</h5>
                    <p className='mt-5'>
                        As sustainability becomes a growing priority, many makeup brands are focusing on eco-friendly practices. From packaging made from recycled materials to cruelty-free formulations, there are more options than ever for those looking to make ethical choices. Embracing sustainable beauty not only helps the environment but also empowers you to feel good about the products you're using.
                    </p>

                    <h5 className='text-3xl font-bold mt-8'>Conclusion: Makeup as Empowerment</h5>
                    <p className='mt-5'>
                        Makeup is more than just a cosmetic tool—it’s a form of self-care, a way to boost confidence, and a creative outlet. Whether you're a beginner or an experienced makeup enthusiast, there’s always something new to learn and explore in the world of beauty. So, embrace makeup as a tool of empowerment and express yourself with every brushstroke. Remember, the best makeup is the one that makes you feel the most like yourself.
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
