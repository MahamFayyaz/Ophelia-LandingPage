import React from "react";
import hero from "/public/download.jpg";
import Image from "next/image";
import {ShoppingCart} from "lucide-react"

export default function Hero() {
  return (
    <section className="p-10">
      <div className="flex flex-col md:flex-row lg:flex-row  gap-y-14 justify-between">
        <div className="flex-1">
        <p className="text-left text-gray-800 text-xl">NEW  COLLECTION</p>
          <h1 className="text-6xl md:text-7xl lg:text-7xl  font-semibold text-yellow-50 mt-10">
            UNVEIL <br /> YOUR <span className="text-black">INNER</span> <br /> RADIANCE
          </h1>
          <p className="text-left text-gray-900 text-xl mt-10">Adorn Yourself with the Timeless Elegance of Ophelia Jewelry - Where Antiquity Meets Affluence.</p>
        <button className="bg-black text-white p-2 rounded-md mt-5 flex items-center"><ShoppingCart className="mr-2 h-8 w-5" />Shop Now</button>
        </div>
        <div className=" flex-1 flex justify-end">
          <Image
            src={hero}
            alt="Hero"
            width={500}
            className="rounded-full hover:rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
