"use client";

import React, { useRef } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaBed,
  FaChevronLeft,
  FaChevronRight,
  FaParking,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { GiResize } from "react-icons/gi";
import { featuredRoom } from "@/api";

const PopularProperties = () => {
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
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 600,
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
        title="Discover Popular Properties"
        sub="We provide full service at every step."
      />

      <div className="flex justify-end gap-4 items-center mb-2">
        <button
          onClick={previous}
          className="bg-gray-400 text-black p-2 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition duration-300 transform hover:scale-105"
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="bg-gray-400 text-black p-2 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition duration-300 transform hover:scale-105"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {featuredRoom.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition group">
              <Image
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.image}
                alt="Property"
                width={300}
                height={300}
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                  {item.title.slice(0, 20)}
                </h1>
                <div className="text-gray-600 flex items-center gap-2 mb-3">
                  <IoLocationSharp className="text-gray-500" />
                  {item.location}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <FaBed className="text-gray-500" />
                    {item.room} Rooms
                  </span>
                  <span className="flex items-center gap-2">
                    <GiResize className="text-gray-500" />
                    {item.area} Sq Ft
                  </span>
                  <span className="flex items-center gap-2">
                    <FaParking className="text-gray-500" />
                    {item.garage} Garage
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default PopularProperties;
