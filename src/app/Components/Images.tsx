import React from "react";
import Image from "next/image";
import mj from "/public/mjj.jpg";
import wj from "/public/women.jpg";
export default function Images() {
  return (
    <section>
      <div className="flex flex-col md:flex-row lg:flex-row  ">
      <div className="bg-white flex-1 items-center p-auto">
          <h1 className="text-6xl md:text-8xl lg:text-8xl p-18 md:p-1 lg:p-1 font-semibold text-center flex items-center shadow-black">
            FOR HER
          </h1>
          <p className="text-center flex items-center justify-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. {" "}
            Repudiandae distinctio nulla aut accusantium consequatur fuga {" "}
            ut nesciunt fugit numquam eos, facilis voluptates voluptate
            hic iure quam ipsa, sit ab? Optio.
          </p>
          <button className="border-gray-950 text-gray-950 border-2 p-5 flex items-center mt-6 mx-auto">
            Learn More
          </button>
        </div>
        <div className="border-y-8 border-white flex items-center justify-center">
          <Image src={wj} alt="Jewellery" height={500} />
        </div>
        <div className=" border-y-8 border-white flex items-center justify-center">
          <Image src={mj} alt="Jewellery" height={500} objectFit="cover" />
        </div>
        <div className="bg-white flex-1 items-center p-auto">
          <h1 className="text-8xl p-1 font-semibold text-center flex items-center shadow-black">
            FOR HIM
          </h1>
          <p className="text-center flex items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Repudiandae distinctio nulla aut accusantium consequatur fuga <br />{" "}
            ut nesciunt fugit numquam eos, facilis <br /> voluptates voluptate
            hic iure quam ipsa, sit ab? Optio.
          </p>
          <button className="border-gray-950 text-gray-950 border-2 p-5 flex items-center mt-6 mx-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
