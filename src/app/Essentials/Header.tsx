import React from "react";
import Image from "next/image";
import {SearchIcon} from 'lucide-react'
import logo from "/public/logo1.png";

export default function Header() {
  return (
    <main className="bg-[#c3a37a] p-10">
      <div className="flex justify-center  border-spacing-6" >
        <Image src={logo} alt="Ophelia" width={300} height={221} className="p-2" />
        <div className='hidden lg:inline-flex justify-items-end items-center text-white'>
        <SearchIcon/>
        </div>
      </div>
      <div>
        <ul className="flex items-center space-x-7 text-lg justify-center text-white border-x-white border-t-2 border-b-2">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </main>
  );
}
