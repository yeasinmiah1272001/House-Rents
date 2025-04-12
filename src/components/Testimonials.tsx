"use client";
import React, { useRef } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { client } from "@/api";
import Image from "next/image";

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container className="">
      <SectionTitle
        title="Clients Testimonials"
        sub="We collect reviews from our customers."
      />
      <Slider ref={sliderRef} {...settings} className="gap-6">
        {client.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden transition group">
              <p>{item.des}</p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  className=" h-16 w-16 rounded-full border border-rose-500 object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  alt="Property"
                  width={300}
                  height={300}
                />
                <div className="">
                  <h1 className="text-xl font-semibold text-black">
                    {item.name}
                  </h1>
                  <p className="text-sm text-gray-500">{item.country}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-4 items-center mt-2">
        <button
          onClick={previous}
          className="bg-rose-500 text-white p-3 rounded-full shadow-md hover:bg-rose-600 transition-transform transform hover:rotate-[-15deg] duration-300"
        >
          <FaChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className="bg-rose-500 text-white p-3 rounded-full shadow-md hover:bg-rose-600 transition-transform transform hover:rotate-[15deg] duration-300"
        >
          <FaChevronRight size={25} />
        </button>
      </div>
    </Container>
  );
};

export default Testimonials;
