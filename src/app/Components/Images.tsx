import React from "react";
import Image from "next/image";
import mj from "/public/mjj.jpg";
import wj from "/public/women.jpg";

export default function Images() {
  return (
    <section className=" p-9 mt-20">
      <h1 className="text-5xl md:text-5xl lg:text-6xl text-center font-semibold text-yellow-50 mt-10">
          Check What <span className="bg-orange-200 text-gray-900">We</span> Have
          </h1>
      <div className="flex mt-10 flex-1 flex-col md:flex-row lg:flex-row  ">
      <div className="bg-white p-10 opacity-60 flex-1 items-center">
          <h1 className=" text-center p-20 flex items-center justify-center text-6xl md:text-5xl lg:text-6xl  md:p-1 lg:p-1 mt-20 font-semibold   shadow-black">
            FOR HER
          </h1>
          <p className="text-center text-lg flex items-center justify-center mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. {" "}
            Repudiandae distinctio nulla aut accusantium consequatur fuga {" "}
            ut nesciunt fugit numquam eos, facilis voluptates voluptate
            hic iure quam ipsa, sit ab? Optio.
          </p>
          <button className="border-gray-950 text-lg text-gray-950 border-2 p-2 flex items-center mt-6 mx-auto hover:bg-white">
            Learn More
          </button>
        </div>
        <div className="border-y-8 border-white opacity-60 flex items-center justify-center hover:opacity-100">
          <Image src={wj} alt="Jewellery" height={400} />
        </div>
        <div className=" border-y-8 border-white opacity-60 flex items-center justify-center hover:opacity-100">
          <Image src={mj} alt="Jewellery" height={400} objectFit="cover" />
        </div>
        <div className="bg-white p-10 opacity-60 flex-1 items-center">
          <h1 className=" text-center p-20 flex items-center justify-center text-6xl md:text-5xl lg:text-6xl  md:p-1 lg:p-1 mt-20 font-semibold   shadow-black">
            FOR HIM
          </h1>
          <p className="text-center text-lg flex items-center justify-center mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. {" "}
            Repudiandae distinctio nulla aut accusantium consequatur fuga {" "}
            ut nesciunt fugit numquam eos, facilis voluptates voluptate
            hic iure quam ipsa, sit ab? Optio.
          </p>
          <button className="border-gray-950 text-lg text-gray-950 border-2 p-2 flex items-center mt-6 mx-auto hover:bg-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
