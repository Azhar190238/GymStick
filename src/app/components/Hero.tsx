import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div
            className="relative bg-cover bottom-32 bg-center bg-no-repeat h-[90vh] md:h-[85vh] lg:h-[122vh]"
            style={{
                backgroundImage: "url('/images/banner/1.png')",
            }}
        >
            <div className='max-w-[1320px] mx-8 md:mx-auto pt-20 md:pt-40'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mt-20 md:mt-0 w-full text-center md:text-left'>
                        <h1 className='text-2xl md:text-[64px] font-montserrat font-bold capitalize leading-[130%] text-white mb-10'>
                            achieve your fitness <br />
                            <span className='text-primary'>goals with gymStick</span>
                        </h1>
                        <p className='text-white leading-[170%] text-[16px]'>
                            At fitness queen gym, we are dedicated to empowering women like you <br />
                            to achieve their fitness goals in a supportive environment.
                        </p>
                        <div className='space-x-10 mt-[50px]'>
                            <button className="button !text-white">start your journey</button>
                            <button className="button !text-white">Learn More</button>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image
                            className='h-[300px] md:h-[667px] w-full object-cover'
                            src='/images/banner/2.png'
                            width={716}
                            height={750}
                            alt='banner'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
