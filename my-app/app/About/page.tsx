"use client";
import React from "react";
import Image from "next/image";
import contactbanner from "../assets/high-angle-decoration-with-pink-paint_23-2148292511.jpg";
import Header from "../Components/Header";
import rightbutton from "../assets/right-button.png";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import admin from "../assets/admin.png";
import date from "../assets/day.png";
import tag from "../assets/tag.png";
import Link from "next/link";
import Footer from "../Components/Footer";

const page = () => {
    return (
        <div>
            <Header
                cartItems={[]}
                toggleCart={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
                <Image
                    src={contactbanner}
                    alt="Banner"
                    className="w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center p-6">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">Beauty Blog</h2>
                    <div className="flex gap-4 justify-center">
                        <a href="/" className="text-white hover:text-pink-300 font-semibold">Home</a>
                        <Image src={rightbutton} alt="Arrow" width={20} />
                        <a href="/Blog" className="text-white hover:text-pink-300 font-semibold">Blog</a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start gap-8 justify-between px-4 sm:px-20 py-20">
                {/* Blog Section */}
                <div className="w-full lg:w-2/4 space-y-16">
                    {/* Blog 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={blog1}
                            alt="Blog 1"
                            width={650}
                            className="rounded-t-lg h-96 object-cover w-full"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex gap-2">
                                    <Image src={date} alt="Date" width={20} />
                                    <span>14 Oct 2022</span>
                                </div>
                                <div className="flex gap-2">
                                    <Image src={admin} alt="Admin" width={20} />
                                    <span>Admin</span>
                                </div>
                                <div className="flex gap-2">
                                    <Image src={tag} alt="Tag" width={20} />
                                    <span>Design</span>
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
                            The Secrets Behind Flawless Makeup: Tips for Every Skin Type
                            </h2>
                            <p className="text-gray-500 mt-4">
                            When it comes to makeup, every individual’s skin is unique, and what works wonders for one person might not work as well for another.
                            </p>
                            <Link href="/Blog1">
                                <button className="mt-4 text-pink-500 hover:text-pink-600 font-medium">
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={blog2}
                            alt="Blog 2"
                            width={650}
                            className="rounded-t-lg h-96 object-cover w-full"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex gap-2">
                                    <Image src={date} alt="Date" width={20} />
                                    <span>14 Oct 2022</span>
                                </div>
                                <div className="flex gap-2">
                                    <Image src={admin} alt="Admin" width={20} />
                                    <span>Admin</span>
                                </div>
                                <div className="flex gap-2">
                                    <Image src={tag} alt="Tag" width={20} />
                                    <span>Trends</span>
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
                                Exploring new makeup trends for 2024
                            </h2>
                            <p className="text-gray-500 mt-4">
                                From bold lips to natural glows, makeup trends for 2024 are all about embracing individuality. Discover the styles that will be trending this year.
                            </p>
                            <Link href="/Blog2">
                                <button className="mt-4 text-pink-500 hover:text-pink-600 font-medium">
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={blog3}
                            alt="Blog 3"
                            width={650}
                            className="rounded-t-lg h-96 object-cover w-full"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex gap-2">
                                    <Image src={date} alt="Date" width={20} />
                                    <span>14 Oct 2022</span>
                                </div>
                                <div className="flex gap-2">
                                    <Image src={admin} alt="Admin" width={20} />
                                    <span>Admin</span>
                                </div>
                                <div className="flex gap-2">
                                    <Image src={tag} alt="Tag" width={20} />
                                    <span>Makeup</span>
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
                                Perfect makeup looks for every occasion
                            </h2>
                            <p className="text-gray-500 mt-4">
                                Whether you're going for a casual look or something more glamorous, we've got makeup tips to help you slay every occasion.
                            </p>
                            <Link href="/Blog3">
                                <button className="mt-4 text-pink-500 hover:text-pink-600 font-medium">
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-6 text-pink-500">Categories</h3>
                        <ul className="text-lg space-y-4">
                            <li className="flex justify-between">
                                <span>Makeup Tips</span> <span>5</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Beauty Trends</span> <span>8</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Product Reviews</span> <span>3</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Skin Care</span> <span>4</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-6 text-pink-500">Recent Posts</h3>
                        <ul className="space-y-10">
                            <li className="flex items-center gap-5">
                                <Image
                                    src={blog1}
                                    alt="Blog 1"
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                />
                                <div>
                                    <span className="block text-lg">Going all-in with millennial design</span>
                                    <Link href="/Blog1">
                                        <button className="mt-1 text-pink-500">Read more</button>
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-center gap-5">
                                <Image
                                    src={blog2}
                                    alt="Blog 2"
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                />
                                <div>
                                    <span className="block text-lg">Exploring new makeup trends</span>
                                    <Link href="/Blog2">
                                        <button className="mt-1 text-pink-500">Read more</button>
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-center gap-5">
                                <Image
                                    src={blog3}
                                    alt="Blog 3"
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                />
                                <div>
                                    <span className="block text-lg">Perfect makeup looks for every occasion</span>
                                    <Link href="/Blog3">
                                        <button className="mt-1 text-pink-500">Read more</button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-6">
                <button className="bg-pink-100 hover:bg-pink-200 p-4 px-6 rounded-lg">1</button>
                <button className="bg-pink-100 hover:bg-pink-200 p-4 px-6 rounded-lg">2</button>
                <button className="bg-pink-100 hover:bg-pink-200 p-4 px-6 rounded-lg">Next</button>
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
            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default page;
