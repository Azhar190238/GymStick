/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Brand: React.FC = () => {
  const brandImages = [
    { src: '/images/Partner/1.png', alt: 'Partner 1' },
    { src: '/images/Partner/2.png', alt: 'Partner 2' },
    { src: '/images/Partner/3.png', alt: 'Partner 3' },
    { src: '/images/Partner/4.png', alt: 'Partner 4' },
    { src: '/images/Partner/5.png', alt: 'Partner 5' },
    { src: '/images/Partner/1.png', alt: 'Partner 6' },
    { src: '/images/Partner/2.png', alt: 'Partner 7' },
  ];
  return (
    <div className="bg-[#31353D] mt-24 py-10">
      <div className="max-w-[1320px] pl-8 lg:mx-auto flex items-center ">
        <Swiper

          spaceBetween={10}
          slidesPerView={4} 
          slidesPerGroup={1}  
          loop={true}

          breakpoints={{
            640: {
              slidesPerView: 4,  
              slidesPerGroup: 1,  
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,  
              slidesPerGroup: 1,  
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,  
              slidesPerGroup: 1,
              spaceBetween: 40,
            },
          }}
        >
          {brandImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.src} width={100} height={74} alt={image.alt} className='w-16 h-12 md:w-20 md:h-14 lg:w-[100px] lg:h-[74px] ' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
