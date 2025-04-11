import React from "react";
import Container from "./Container";
import banner from "@/images/fp-12.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <Container className="relative w-full h-[500px] overflow-hidden">
      {/* Image Section */}
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src={banner}
          alt="banner"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          Find Your Dream Apartment
        </h1>
        <p className="text-white text-lg md:text-2xl">
          We Have Over Million Properties For You.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-rose-400 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            For Sell
          </button>
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
            For Rent
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
