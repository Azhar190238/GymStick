import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div
            className=" relative -top-32  bg-cover bg-center bg-no-repeat h-full lg:h-[850px]"
            style={{
                backgroundImage: "url('/images/banner/1.png')",
            }}
        >
            <div className='max-w-[1320px] mx-8 md:mx-auto pt-40'>
                <div className='flex flex-col md:flex-row justify-between'>                
                    <div className='mt-40 w-full'>
                    <h1 className='text-2xl md:text-[64px] font-montserrat font-bold capitalize leading-[130%] text-white mb-10'>achieve your fitness <br />
                    <span className='text-primary'>goals with gymStick</span></h1>
                    <p className=' text-white leading-[170%] text-[16px] '>At fitness queen gym, we are dedicated to empowering woman like you <br /> to achieve their fitness goals in a supportive and.</p>
                    <div className='space-x-10 mt-[50px]'>
                        <button className="button "> start your journey</button>
                        <button className="button "> Learn More</button>
                    </div>
                </div>
                <div className=''>
                  <Image className='h-[400px] relative bottom-7 md:-bottom-[10px] md:h-[660px]' src='/images/banner/2.png' width={716} height={680} alt='banner'/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
