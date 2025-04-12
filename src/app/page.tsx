import Banner from "@/components/Banner";
import FeatureProperties from "@/components/FeatureProperties";
import PopularPlaces from "@/components/PopularPlaces";
import PopularPropertices from "@/components/PopularPropertices";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      <PopularPlaces />
      <FeatureProperties />
      <WhyChooseUs />
      <PopularPropertices />
      <Team />
      <Testimonials />
    </div>
  );
};

export default page;
