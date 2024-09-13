import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div
            className=" relative -top-32  bg-cover bg-center bg-no-repeat h-full lg:h-[850px]"
            style={{
                backgroundImage: "url('/images/banner/1.png')",
                // height: '850px',
            }}
        >
            <div className='max-w-[1320px] mx-8 md:mx-auto pt-40'>
                <div className='flex flex-col md:flex-row justify-between'>                
                    <div className='mt-40'>
                    <h1 className='text-2xl md:text-6xl font-montserrat font-bold capitalize leading-[130%] text-white mb-10'>achieve your fitness <br />
                    <span className='text-primary'>goals with gymStick</span></h1>
                    <p className=' text-gray-300'>at fitness queen gym, we are dedicated to empowering woman like you to achieve their fitness goals in a supportive and.</p>
                    <div className='space-x-10'>
                        <button className="button mt-9"> start your journey</button>
                        <button className="button mt-9"> Learn More</button>
                    </div>
                </div>
                <div className=''>
                  <Image className='h-[400px] relative bottom-7 md:bottom-0 md:h-[660px]' src='/images/banner/2.png' width={716} height={680} alt='banner'/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
