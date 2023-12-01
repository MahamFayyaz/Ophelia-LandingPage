'use client'
import React, { Component, ReactNode } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import e1 from '/public/e1.jpg'
import e2 from '/public/e6.jpg'
import e3 from '/public/e2.jpg'
import e4 from '/public/e5.jpg'
import e5 from '/public/i1.jpg'
import e6 from '/public/i2.jpg'

import jewel from '/public/mjj.jpg'
import Head from 'next/head';
import Image from 'next/image';
import Button from './Button';
export default class ProductCarousal extends Component {
    
    
        render():ReactNode{
            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
              };
  return (
    <section >
    <div className=' ml-7 p-5 '>
    <h1 className="text-5xl md:text-5xl lg:text-6xl text-center font-semibold text-yellow-50 mt-10">
          Our  Best <span className="bg-orange-200 text-gray-900">Sellers</span> 
          </h1>
          <p className="text-center text-xl md:text-3xl lg:text-2xl leading-9 p-10">A must have collection of timeless style and and design, these pieces deserve our attention and awe</p>

    </div>
    
    <div className=' w-[90%] flex justify-center items-center mx-auto '>
        <Slider {...settings} className='gap-0 w-[100%]'>
    <div>
      <Image src={e1} alt='jewel' width={200} objectFit='cover'/>
      <Button/>
    </div>
    <div>
    <Image src={e2} alt='jewel' width={225}/>
    <Button/>
    </div>
    <div>
    <Image src={e3} alt='jewel' width={200}/>
    <Button/>
    </div>
    <div>
    <Image src={e4} alt='jewel' width={258}/>
    <Button/>
    </div>
    <div>
    <Image src={e5} alt='jewel' width={200}/>
    <Button/>
    </div>
    <div>
    <Image src={e6} alt='jewel' width={200}/>
    <Button/>
    </div>
  </Slider>
  </div>
  </section>
  )}
}
