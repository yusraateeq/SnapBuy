"use client"

import React from 'react'
import Image from 'next/image'
import image1 from "../assets/blog2.jpg"; // Replace with makeup-related image
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
                <h2 className="text-5xl md:text-6xl font-bold text-center">Mastering Makeup: Tips and Trends for 2024</h2>
                <div className='flex items-center justify-center'>
                    <Image src={image1} alt='' width={900} height={600} className='mt-10 w-full sm:w-3/4 md:w-1/2 rounded-lg shadow-lg' />
                </div>
                <div className="flex items-center gap-6 mt-6 justify-center text-sm sm:text-base">
                    <div className="flex text-gray-500 gap-2">
                        <Image src={date} alt="" width={25} />
                        <h6>Admin</h6>
                    </div>
                    <div className="flex text-gray-500 gap-2">
                        <Image src={admin} alt="" width={25} />
                        <h6>14 Oct 2024</h6>
                    </div>
                    <div className="flex text-gray-500 gap-2">
                        <Image src={tag} alt="" width={25} />
                        <h6>Makeup</h6>
                    </div>
                </div>
                <div className='px-4 sm:px-10 md:px-56'>
                    <p className="text-lg mt-10 ">
                        Makeup is more than just a beauty ritual; it’s a way of expressing yourself and embracing your creativity. As we head into 2024, there are a few makeup trends that are capturing everyone’s attention, along with timeless techniques that continue to rule the beauty world. Whether you're a beginner or a seasoned pro, these tips will help you elevate your makeup game.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>1-Flawless Skin: The Base is Everything</h5>
                    <p className='mt-5'>The first step to a perfect makeup look is flawless skin. Start with a hydrating primer to smooth your base and create a long-lasting finish. Look for foundations that offer a natural finish and buildable coverage to even out your complexion without looking cakey. Finish with a light layer of setting powder to lock everything in place, ensuring your makeup stays fresh all day.</p>
                    <h5 className='text-2xl font-bold mt-5'>2-Glowing Highlight: Illuminating Your Best Features</h5>
                    <p className='mt-5'>Highlighter continues to be a favorite in the beauty world. Whether you prefer a subtle glow or a dramatic shine, highlight the high points of your face—cheekbones, brow bones, and the tip of your nose. Choose a highlighter that suits your skin tone, ranging from golden hues for warmer skin tones to cooler, pearl-like shades for fairer skin.</p>
                    <h5 className='text-2xl font-bold mt-5'>3-Eyes that Pop: Bold and Beautiful</h5>
                    <p className='mt-5'>Eyeshadows are taking a more playful turn in 2024. Bold colors, glitter, and metallic shades are making a comeback. Experiment with vibrant eyeshadow palettes that feature hues like electric blue, neon pink, and deep purples. For a softer look, opt for neutral tones with a pop of shimmer. The key is to have fun with color and texture.</p>
                    <h5 className='text-2xl font-bold mt-5'>4-Sculpted Brows: Frame Your Face</h5>
                    <p className='mt-5'>Brows can make or break your makeup look. In 2024, thick, bold brows are in, but they still need to look natural. Use a brow pencil or gel to fill in sparse areas, keeping the brow shape clean and defined. Brush through your brows with a spoolie to ensure they look soft and not overly drawn on.</p>
                    <h5 className='text-2xl font-bold mt-5'>5-Glossy Lips: A Fresh Finish</h5>
                    <p className='mt-4'>Matte lips are taking a backseat in 2024, as glossy lips are having a major moment. Choose a gloss that adds dimension to your lips without feeling sticky. Lip glosses with a hint of color can complement any makeup look, from a fresh natural look to a bold evening statement.</p>

                    <h5 className='text-3xl font-bold mt-8'>6-Skinimalism: Less is More</h5>
                    <p className='mt-5'>The skinimalism trend emphasizes minimal makeup with a focus on healthy, glowing skin. Skip the heavy layers and instead use lightweight formulas that enhance your skin’s natural beauty. Light coverage foundations, tinted moisturizers, and sheer blushes are great for this look. It's all about showcasing your natural skin while still looking polished.</p>

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






