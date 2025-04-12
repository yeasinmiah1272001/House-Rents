"use client";
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { featuredRoom } from "@/api";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Container from "./Container";
import { FaBed, FaHeart, FaShareAlt, FaParking } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureProperties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="">
      <Container className="py-10">
        <SectionTitle
          title="Feature Properties"
          sub="Properties In Most Popular Places"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredRoom.map((room, index) => (
            <div
              key={index}
              className="lg:flex items-center gap-3 bg-white border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // Alternating animation
            >
              <div
                className="relative group overflow-hidden transition"
                data-aos="zoom-in"
              >
                <Image
                  alt="Property Image"
                  src={room.image}
                  height={400}
                  width={400}
                  className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-rose-500 bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
                  {room.status}
                </div>
              </div>
              <div className="p-6 space-y-4" data-aos="fade-left">
                <h1 className="text-xl font-semibold text-gray-800">
                  {room.title}
                </h1>
                <div className="text-gray-600 flex items-center gap-2">
                  <IoLocationSharp className="text-gray-500" /> {room.location}
                </div>
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 text-gray-600">
                    <FaBed className="text-gray-500" /> {room.room} Rooms
                  </span>
                  <span className="flex items-center gap-2 text-gray-600">
                    <GiResize className="text-gray-500" /> {room.area} Sq Ft
                  </span>
                  <span className="flex items-center gap-2 text-gray-600">
                    <FaParking className="text-gray-500" /> {room.garage} Garage
                  </span>
                </div>
                <div className="border-t pt-4 flex items-center justify-between">
                  <h1 className="text-lg font-bold text-gray-800">
                    ${room.price}
                  </h1>
                  <div
                    className="flex items-center gap-3 text-gray-600"
                    data-aos="fade-up"
                  >
                    <FaShareAlt className="cursor-pointer hover:text-gray-800" />
                    <FaHeart className="cursor-pointer hover:text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeatureProperties;
