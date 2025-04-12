"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { chooseUs } from "@/api";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
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
        title="Why Choose Us"
        sub="We provide full service at every step."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chooseUs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 p-6 rounded-md cursor-cell hover:shadow-lg transition-shadow duration-300"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // Alternating animations
          >
            <div className="relative group">
              <Image
                className="mx-auto group-hover:scale-110 transition-transform duration-500"
                alt="image"
                src={item.image}
                height={100}
                width={100}
                data-aos="zoom-in"
              />
            </div>
            <h1
              className="text-center text-xl font-semibold"
              data-aos="fade-right"
            >
              {item.title}
            </h1>
            <p className="text-center text-gray-500 mt-3" data-aos="fade-left">
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
