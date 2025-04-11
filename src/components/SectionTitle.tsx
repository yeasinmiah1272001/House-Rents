import React from "react";
interface Props {
  title: string;
  sub: string;
}
const SectionTitle = ({ title, sub }: Props) => {
  return (
    <div className="text-center my-8 space-y-4">
      <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
        {title}
      </h1>
      <p className="text-lg text-gray-600">{sub}</p>
      <div className="mx-auto w-24 h-1 bg-blue-500 rounded"></div>
    </div>
  );
};

export default SectionTitle;
