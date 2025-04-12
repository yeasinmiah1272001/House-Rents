"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { Popular } from "@/api";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularPlaces = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Container className="">
      <SectionTitle
        title={"Popular Places"}
        sub={
          "Properties In Most Popular placesProperties In Most Popular places"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Popular.map((item, index) => (
          <div
            key={index}
            className="flex items-center shadow hover:shadow-black duration-500 group overflow-hidden gap-6 border border-gray-400 rounded-md"
            data-aos="fade-up" // AOS animation type
          >
            <Image
              className="w-40 h-40 group-hover:scale-110 transition-transform duration-500"
              src={item.image}
              height={300}
              width={300}
              alt="images"
            />
            <div>
              <h1 className="font-semibold text-xl text-black">{item.name}</h1>
              <p className="text-gray-500">{item.seat}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularPlaces;
