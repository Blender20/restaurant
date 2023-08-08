"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Quality and fast-turn around",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Fast turn-around in the DMV area",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Support your local business",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-slate-300">
      {/*TEXT CONTAINER */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-blue-800 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-blue-600 text-white py-4 px-8 rounded-md">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
