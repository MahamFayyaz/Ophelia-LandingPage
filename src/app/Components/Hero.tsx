import React from "react";
import hero from "/public/j.jpg";
import Image from "next/image";
import {ShoppingCart} from "lucide-react"

export default function Hero() {
  return (
    <section className="p-12">
      <div className="flex flex-col md:flex-row lg:flex-row  gap-y-14 justify-between">
        <div className="flex-1">
        <p className=" text-2xl lg:text-2xl text-left text-gray-800 opacity-70  font-bold">NEW  COLLECTION</p>
          <h1 className="text-6xl md:text-6xl lg:text-7xl  font-semibold text-yellow-50 mt-5">
            UNVEIL <br /> YOUR <span className="text-black">INNER</span> <br /> RADIANCE
          </h1>
          <p className="text-1xl lg:text-xl text-left text-gray-900  font-semibold mt-10">Adorn Yourself with the Timeless Elegance of Ophelia Jewelry - Where Antiquity Meets Affluence.</p>
        <button className="bg-black text-white text:xl lg:text-xl p-1 lg:p-3 hover:bg-white hover:text-black rounded-md mt-5 flex items-center"><ShoppingCart className="mr-2 h-8 w-5" />Shop Now</button>
        </div>
        <div className=" flex-1 flex justify-end">
          <Image
            src={hero}
            alt="Hero"
            width={650}
            className="rounded-full hover:scale-110 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
