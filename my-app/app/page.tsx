"use client"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Product from "./Components/Product";
import Slider from "./Components/User";
import User from "./Components/Slider";
import Promotion from "./Components/Promotion";
import Sofa from "./Components/Sofa";
import Blog from "./Components/Blog";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header cartItems={[]} toggleCart={function (): void {
        throw new Error("Function not implemented.");
      }} />
      <Hero />
      <Product />
      <Sofa />
      <User />
      <Banner />
      <Blog />
      <Slider /> 
      <Promotion />
      <Footer />


    </div>
  );
}
