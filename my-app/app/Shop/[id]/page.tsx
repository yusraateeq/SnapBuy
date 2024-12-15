'use client';
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/Components/Header';
import Link from "next/link";
import Footer from "@/app/Components/Footer";

// Import all product images
import shop1 from "../../assets/eye.jpg";
import shop2 from "../../assets/eye1.jpg";
import shop3 from "../../assets/eye2.jpg";
import shop4 from "../../assets/eye3.jpg";
import shop5 from "../../assets/eye4.jpg";
import shop6 from "../../assets/shadow.jpg";
import shop7 from "../../assets/blush.jpg";
import shop8 from "../../assets/lipstick.jpg";
import shop9 from "../../assets/blander.jpg";
import shop10 from "../../assets/eyeshadow.jpg";
import shop11 from "../../assets/mascara.jpg";
import shop12 from "../../assets/pomade.jpg";
import shop13 from "../../assets/shadow1.jpg";
import shop14 from "../../assets/base1.jpg";
import shop15 from "../../assets/base2.jpg";
import shop16 from "../../assets/base3.jpg";
import set1 from '../../assets/make1.jpg';
import del from "../../assets/delete.png";
import set2 from '../../assets/make2.jpg';
// (other image imports)

const products = [
    { id: 1, name: "Glitter Eye Shadow", price: "Rs. 25,000.00", description: "✨ Achieve vibrant color with just one swipe.", image: shop1, rating: 4, reviews: 120 },
    { id: 2, name: "Face Powder", price: "Rs. 25,000.00", description: "✨ Feels like a second skin.", image: shop2, rating: 5, reviews: 200 },
    { id: 3, name: "Blushon", price: "Rs. 25,000.00", description: "✨ Blends effortlessly for a flawless finish.", image: shop3, rating: 3, reviews: 50 },
    { id: 4, name: "Face Powder ", price: "Rs. 25,000.00", description: "✨ Keeps shine at bay for a matte look.", image: shop4, rating: 4, reviews: 90 },
    { id: 5, name: "Eye Shadow", price: "Rs. 25,000.00", description: "✨ Create endless eye-catching looks.", image: shop5, rating: 5, reviews: 150 },
    { id: 6, name: "Blushon", price: "Rs. 22,50.00", description: "✨ A little goes a long way.", image: shop6, rating: 4, reviews: 75 },
    { id: 7, name: "Blushon", price: "Rs. 251,000.00", description: "✨ Customize your look from subtle to bold.", image: shop7, rating: 3, reviews: 30 },
    { id: 8, name: "Lipstick", price: "Rs. 25,200.00", description: "✨ Make a statement with every shade.", image: shop8, rating: 4, reviews: 110 },
    { id: 9, name: "Makeup Blander_", price: "Rs. 258,200.00",  description: "✨ Feels smooth on your skin.",image: shop9, rating: 5, reviews: 180 },
    { id: 10, name: "Glitter Eye Shadow", price: "Rs. 20,000.00", description: "✨ Stay flawless all day and night.", image: shop10, rating: 4, reviews: 60 },
    { id: 11, name: "Mascara ", price: "Rs. 200,000.00", description: "✨ Get fuller, longer lashes instantly.", image: shop11, rating: 3, reviews: 40 },
    { id: 12, name: "Lipstick", price: "Rs. 100,000.00", description: "✨ Glides on smoothly for a lightweight feel.", image: shop12, rating: 5, reviews: 250 },
    { id: 13, name: "Shiny Eye Shadow", price: "Rs. 258,800.00", description: "✨ Crafted to complement everyone.", image: shop13, rating: 4, reviews: 85 },
    { id: 14, name: "Face Powder", price: "Rs. 250,000.00", description: "✨ Blurs imperfections effortlessly..", image: shop14, rating: 5, reviews: 300 },
    { id: 15, name: "Face Powder", price: "Rs. 115,000.00", description: "✨ Perfect for all-day confidence.", image: shop15, rating: 4, reviews: 95 },
    { id: 16, name: "Glitter Blushon", price: "Rs. 244,000.00", description: "✨ Stay fresh and glowing all day.", image: shop16, rating: 5, reviews: 150 },
    // (other products)
];

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
    const [cart, setCart] = useState<any[]>([]); // Initialize as an empty array
    const [isCartOpen, setIsCartOpen] = useState(false); // Sidebar visibility
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        params.then((resolved) => setResolvedParams(resolved));

        // Retrieve cart from localStorage on page load
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [params]);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle cart visibility
    };

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    const productId = Number(resolvedParams.id);
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return notFound();
    }

    // Add product to cart
    const addToCart = () => {
        const newProduct = { ...product, quantity };
        const updatedCart = [...cart, newProduct];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save cart to localStorage
        setIsCartOpen(true); // Open the cart sidebar immediately after adding to cart
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => {
            const price = String(item.price).replace(/[^\d.-]/g, ""); // Ensure item.price is a string
            return total + parseFloat(price) * item.quantity;
        }, 0);
    };


    const relatedProducts = products.filter((item) => item.id !== productId).slice(0, 4);

    const removeItemFromCart = (itemId: number) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <Header cartItems={cart} toggleCart={toggleCart} />

            {/* Product Details Section */}
            <div className="product-details pt-16">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-28">
                    <div>
                        <Image src={product.image} alt={product.name} width={600} height={500} className="rounded-lg bg-yellow-50 [height:600]" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-xl text-gray-700 mt-4">{product.price}</p>
                        <div className="flex items-center justify-center lg:justify-start mt-2">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={`${index < product.rating ? "text-yellow-500" : "text-gray-300"} text-xl`}>★</span>
                            ))}
                            <p className="ml-2 text-gray-500">{product.reviews} reviews</p>
                        </div>
                        <p className="text-gray-600 mt-4">{product.description}</p>

                        {/* Size and Color Selection */}
                        <div className="mt-6">
                            <h3 className="font-semibold">Select Size:</h3>
                            <div className="flex space-x-4 mt-2 lg:justify-start justify-center ">
                                <button className="bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 transition-all px-4 py-2 rounded">L</button>
                                <button className="g-pink-50 hover:bg-pink-100 focus:bg-pink-100 transition-all px-4 py-2 rounded">XL</button>
                                <button className="g-pink-50 hover:bg-pink-100 focus:bg-pink-100 transition-all px-4 py-2 rounded">XS</button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold">Select Color:</h3>
                            <div className="flex items-center lg:justify-start justify-center space-x-4 mt-2">
                                <button className="w-8 h-8 bg-pink-700 rounded-full"></button>
                                <button className="w-8 h-8 bg-purple-600 rounded-full"></button>
                                <button className="w-8 h-8 bg-red-600 rounded-full"></button>
                            </div>
                        </div>

                        {/* Quantity Selection and Add to Cart */}
                        <div className="flex items-center gap-8 mt-6 justify-center lg:justify-start">
                            <div className="flex items-center space-x-4 border-4 border-pink-600 rounded-xl py-3">
                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 rounded">-</button>
                                <span className="text-xl">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-4 rounded">+</button>
                            </div>

                            <button onClick={addToCart} className="border-4 bg-pink-500 border-pink-400 text-white hover:bg-pink-300 transition-all hover:text-black py-4 px-16 rounded-full font-bold">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b-2 pt-20 "></div>




            <div className="mt-28">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-14 text-lg">
                    <h4>Description</h4>
                    <h4 className="text-gray-400">Additional Information</h4>
                    <h4 className="text-gray-400">Reviews [5]</h4>
                </div>
                <div className="mx-4 sm:mx-40 mt-8">
                    <p className="text-gray-400">Elevate your makeup game with our exclusive line of high-quality, vibrant products. From bold eye shadows to luxurious lipsticks, our curated selection brings out the best in you. Each product is designed to offer flawless application and long-lasting wear, ensuring that you look stunning from day to night.</p>
                    <p className="text-gray-400 mt-6">Crafted with the finest ingredients, our makeup collection is perfect for every skin tone and occasion. Whether you're looking for a natural, everyday look or something more dramatic for a night out, we’ve got you covered. Get ready to express your individuality with our stunning range of products that provide rich colors, smooth textures, and a flawless finish.</p>
                </div>
                <div className="lg:flex items-center justify-center gap-8 mt-16 sm:gap-16">
                    <Image src={set1} alt="" width={600} className="bg-red-50 h-[300px] rounded-lg sm:w-[600px]" />
                    <Image src={set2} alt="" width={600} className="bg-red-50 h-[300px] rounded-lg sm:w-[600px]" />
                </div>
                <div className="border-b-2 my-10"></div>
            </div>





            {/* Related Products */}
            <div className="mt-20 mb-16 px-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map((relatedProduct) => (
                        <Link key={relatedProduct.id} href={`/Shop/${relatedProduct.id}`} passHref>
                            <div className="border p-4 rounded">
                                <Image src={relatedProduct.image} alt={relatedProduct.name} width={200} height={200} className="rounded-lg w-full h-64" />
                                <h3 className="text-lg font-semibold mt-4">{relatedProduct.name}</h3>
                                <p className="text-gray-600">{relatedProduct.price}</p>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className={`${index < relatedProduct.rating ? "text-yellow-500" : "text-gray-300"} text-xl`}>★</span>
                                    ))}
                                    <p className="ml-2 text-gray-500">{relatedProduct.reviews} reviews</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>



            {isCartOpen && (
                <div className="cart-sidebar fixed top-0 right-0 w-full sm:w-96 bg-white shadow-lg p-4 overflow-y-auto max-h-screen">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Shopping Cart</h2>
                        <button onClick={toggleCart}>✕</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="border-b-2 w-64 mt-8"></div>
                    </div>
                    <div>
                        {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="cart-item flex justify-start gap-8 items-center mb-4 mt-10">
                                    <Image src={item.image} alt={item.name} width={80} height={80} className="bg-yellow-100 rounded-lg" />
                                    <div>
                                        <h3 className="text-sm">{item.name}</h3>
                                        <div className="flex items-center gap-4">
                                            <p>{item.quantity}</p>
                                            <p>x</p>
                                            <p className="text-yellow-500 text-sm">{item.price}</p>
                                            <div>
                                                <button onClick={() => removeItemFromCart(item.id)} className="px-4 py-1">
                                                    <Image src={del} alt="Delete" width={25} height={25} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-10 sm:mt-44">
                        <p>Subtotal: Rs. {calculateSubtotal().toLocaleString()}</p>
                        <p className="border-b-2 my-6"></p>
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <Link href="/Cart">
                                <button className="border rounded-full py-1 px-6 border-gray-700 mb-4 sm:mb-0">View Cart</button>
                            </Link>
                            <button className="border rounded-full py-1 px-6 border-gray-700">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
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

export default ProductPage;











