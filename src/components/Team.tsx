import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { team } from "@/api";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <Container className="">
      <SectionTitle
        title="Meet Our Agents"
        sub="Our Agents are here to help you"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {team.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <div className="relative">
              <Image
                className="mx-auto w-full"
                alt="image"
                src={item.image}
                height={200}
                width={200}
              />
              <div className="absolute top-6 right-3 bg-gray-700 h-auto p-1 rounded-lg shadow-lg flex flex-col items-center space-y-3">
                <span className="hover:scale-110 transition-transform duration-200">
                  <FaFacebook
                    className="text-white hover:text-blue-500"
                    size={15}
                  />
                </span>
                <span className="hover:scale-110 transition-transform duration-200">
                  <FaLinkedin
                    className="text-white hover:text-blue-600"
                    size={15}
                  />
                </span>
                <span className="hover:scale-110 transition-transform duration-200">
                  <FaTwitter
                    className="text-white hover:text-sky-400"
                    size={15}
                  />
                </span>
                <span className="hover:scale-110 transition-transform duration-200">
                  <FaInstagram
                    className="text-white hover:text-pink-500"
                    size={15}
                  />
                </span>
              </div>
            </div>
            <div className="text-center justify-center p-3">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <h3 className="text-gray-500">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
