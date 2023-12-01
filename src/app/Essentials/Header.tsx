'use client'
// import React from "react";
// import Image from "next/image";
// import {SearchIcon} from 'lucide-react'
import logo from "/public/logo1.png";

// export default function Header() {
//   return (
//     <main className="bg-[#c3a37a] p-10">
//       <h1></h1>
//       <div className="flex justify-center  border-spacing-6" >
//         <Image src={logo} alt="Ophelia" width={100} height={100} className="" />
//         {/* <div className='hidden lg:inline-flex justify-items-end items-center text-white'>
//         <SearchIcon/>
//         </div> */}
//       </div>
//       <div>
//         <ul className="flex items-center space-x-7 text-xl lg:text-xl justify-center text-white border-x-white border-t-2 border-b-2">
//             <a href="/"><li>Home</li></a>
//             <li>Products</li>
//             <li>About</li>
//             <a href="/Components/ContactForm"><li>Contact</li></a>
//         </ul>
//       </div>
//     </main>
//   );
// }

// components/Header.js





import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {ShoppingCart,SearchIcon} from 'lucide-react'
import { XIcon } from 'lucide-react';

import { MenuIcon } from 'lucide-react';

const Header=()=> {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)}
  return (
    <nav>
    <div className='flex justify-between  items-center py-6 px-20'>
    <Link href={'/'}><Image src={logo} alt="Ophelia" width={100} height={100} className="" /></Link>
        <ul className='hidden lg:inline-flex gap-x-10 text-white'>
            <li className='text-lg'><Link href={'/Category/female'}>Female</Link></li>
            <li className='text-lg'><Link href={'/Category/male'}>Male</Link></li>
            <li className='text-lg'><Link href={'/Category/kids'}>Kids</Link></li>
            <li className='text-lg'><Link href={'/allproducts'}>All Products</Link></li>
        </ul>
        <div className='hidden lg:inline-flex justify-center items-center'>
        <SearchIcon/>
        </div>
      
       
        <button
              onClick={toggleMenu}
                className="text-black hover:text-white focus:outline-none focus:text-white lg:hidden"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
              </button>
    </div>
    {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 text-center text-white space-y-1 sm:px-3">
          
            <ul>
           
          <li className='text-lg '><Link href={'/Category/female'}>Female</Link></li>
            <li className='text-lg'><Link href={'/Category/male'}>Male</Link></li>
            <li className='text-lg'><Link href={'/Category/kids'}>Kids</Link></li>
            <li className='text-lg'><Link href={'/allproducts'}>All Products</Link></li></ul>
          </div>
        </div>
      )}
  
    </nav>

    
  )
}
export default Header;