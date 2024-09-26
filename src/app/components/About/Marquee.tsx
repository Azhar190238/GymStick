'use client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const brandImages = [
  { src: '/images/Partner/1.png', alt: 'Partner 1' },
  { src: '/images/Partner/2.png', alt: 'Partner 2' },
  { src: '/images/Partner/3.png', alt: 'Partner 3' },
  { src: '/images/Partner/4.png', alt: 'Partner 4' },
  { src: '/images/Partner/5.png', alt: 'Partner 5' },
  { src: '/images/Partner/3.png', alt: 'Partner 6' },
  { src: '/images/Partner/4.png', alt: 'Partner 7' },
  { src: '/images/Partner/5.png', alt: 'Partner 8' },

];

const App = () => (
  <div className="bg-[#31353D] my-10">
    <Marquee pauseOnHover={true} speed={50} gradient={false} loop={0}>
      {brandImages.map((image, index) => (
        <div key={index} className="mx-[60px] flex-shrink-0">
          <Image src={image.src} width={100} height={100} alt={image.alt} className="rounded-full object-contain w-[100px] h-[100px] lg:w-[120px] lg:h-[140px]"/>
        </div>
      ))}
    </Marquee>
  </div>
);

export default App;
