import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { chooseUs } from "@/api";
import Image from "next/image";

const WhyChooseUs = () => {
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
            className="border border-gray-400 p-6 rounded-md cursor-cell"
          >
            <Image
              className="mx-auto"
              alt="image"
              src={item.image}
              height={100}
              width={100}
            />
            <h1 className="text-center text-xl font-semibold">{item.title}</h1>
            <p className="text-center text-gray-500 mt-3">{item.des}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
