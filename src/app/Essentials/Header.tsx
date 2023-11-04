import React from "react";
import Image from "next/image";
import {SearchIcon} from 'lucide-react'
import logo from "/public/logo1.png";

export default function Header() {
  return (
    <main className="bg-[#c3a37a] p-10">
      <h1></h1>
      <div className="flex justify-center  border-spacing-6" >
        <Image src={logo} alt="Ophelia" width={100} height={100} className="" />
        {/* <div className='hidden lg:inline-flex justify-items-end items-center text-white'>
        <SearchIcon/>
        </div> */}
      </div>
      <div>
        <ul className="flex items-center space-x-7 text-xl lg:text-xl justify-center text-white border-x-white border-t-2 border-b-2">
            <a href="/"><li>Home</li></a>
            <li>Products</li>
            <li>About</li>
            <a href="/Components/ContactForm"><li>Contact</li></a>
        </ul>
      </div>
    </main>
  );
}
