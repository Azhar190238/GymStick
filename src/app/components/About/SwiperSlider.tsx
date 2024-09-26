'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
    return (
        <>
            <div className='mt-40 max-w-[1320px] mx-auto h-full slider111'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-96 w-80 bg-black rounded-2xl '>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-80 bg-black rounded-2xl'>
                            <p className='text-white text-center text-6xl'>Slide 1</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}