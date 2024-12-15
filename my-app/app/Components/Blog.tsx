"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import time from "../assets/time.png";
import date from "../assets/date.png";
import Link from "next/link";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-pink-50 to-pink-100 py-16 mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header with AOS Fade-In */}
        <h2
          className="text-4xl md:text-6xl text-pink-600 font-extrabold text-center mb-6"
          data-aos="fade-up"
        >
          Our Blog
        </h2>
        <p
          className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Find a bright idea to suit your taste with our great selection of beauty inspirations.
        </p>

        {/* Blog Posts */}
        <div className="lg:flex gap-8 justify-center">
          {[blog1, blog2, blog3].map((blog, index) => (
            <div
              key={index}
              className="relative w-full sm:w-1/2 lg:w-1/3 group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`} // Adding a delay to stagger animations
            >
              {/* Blog Image */}
              <Image
                src={blog}
                alt={`Blog ${index + 1}`}
                width={400}
                height={250}
                className="rounded-t-lg w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Blog Content */}
              <div className="p-6">
                {/* Dynamic Content */}
                <p className="text-lg mt-4 font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  {index === 0
                    ? "Exploring the Latest Beauty Trends"
                    : index === 1
                      ? "Mastering Makeup: Tips and Trends for 2024"
                      : "The Art of Makeup: Enhancing Natural Beauty"}
                </p>
                <Link href={index === 0 ? "/Blog1" : index === 1 ? "/Blog2" : "/Blog3"}>
                  <button className="mt-4 text-pink-500 font-semibold border-b-2 border-transparent group-hover:border-pink-500 transition-all">
                    Read More
                  </button>
                </Link>

                {/* Time and Date */}
                <div className="flex items-center gap-4 mt-5 justify-center">
                  <div className="flex items-center gap-1">
                    <Image src={time} alt="Time" width={20} height={20} />
                    <h6 className="text-sm">5 min</h6>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src={date} alt="Date" width={20} height={20} />
                    <h6 className="text-sm">
                      {index === 0
                        ? "15th Nov 2024"
                        : index === 1
                          ? "10th Nov 2024"
                          : "5th Dec 2024"}
                    </h6>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <Link href="/About">  <button
            className="relative text-pink-500 font-semibold border-b-2 border-black py-2 px-6 rounded-md bg-white shadow-md hover:shadow-lg hover:bg-pink-50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="group-hover:tracking-wider transition-all">
              View All Posts
            </span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all -right-6 group-hover:right-2">
              →
            </span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
