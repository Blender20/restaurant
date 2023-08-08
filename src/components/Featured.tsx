import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";
const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-blue-600">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[65vh] flex flex-col items-center justify-around p-4 hover:bg-blue-300 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[15deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex- flex flex-col gap-4 justify-center items-center text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl mt-1">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-blue-500 text-white rounded-md p-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Featured;
