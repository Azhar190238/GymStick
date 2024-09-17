import Image from 'next/image';
import React from 'react';

const Hero2: React.FC = () => {
    const features = [
        { imgSrc: '/images/Home2/1.png', heading: 'Scheduling' },
        { imgSrc: '/images/Home2/2.png', heading: 'Coaching' },
        { imgSrc: '/images/Home2/3.png', heading: 'Nutrition' },
        { imgSrc: '/images/Home2/4.png', heading: 'Tracking' },
        { imgSrc: '/images/Home2/5.png', heading: 'Community' },
    ];
    return (
        <div
            className=" relative -top-32 bg-cover bg-center bg-no-repeat h-full md:h-[135vh]"
            style={{
                backgroundImage: "url('/images/Home2/bg.png')",
            }}
        >
            <div className='max-w-[1320px] mx-8 md:mx-auto pt-40 '>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='mt-40'>
                        <div className='font-montserrat font-bold uppercase leading-[130%] mb-10'>
                            <h1 className='text-2xl md:text-5xl  text-primary mb-12'>get </h1>
                            <h2 className='text-white text-4xl md:text-[84px]'>stronger</h2>
                            <h3 className='text-white text-3xl md:text-7xl pt-12 pl-36'>every day</h3>
                        </div>
                        <p className=' text-white text-2xl font-medium leading-[160%]'>At Fitness Queen Gym, we help women achieve their <br />
                            fitness goals with support and motivation</p>
                        <div className=''>
                            <button className="button mt-12 text-white"> Start Your Journey</button>
                        </div>
                    </div>
                    <div className=''>
                        <Image className='h-[400px] relative bottom-7 top-8 md:top-0 right-20  md:h-[715px]' src='/images/Home2/man.png' width={600} height={750} alt='banner' />
                    </div>
                </div>
                <div className='max-w-[1130px] mx-auto bg-[#fff] relative -top-8  rounded'>
                    <div className='shadow-custom-light grid grid-cols-2 md:grid-cols-5'>
                        {features.map((feature, index) => (
                            <div key={index} className=' p-2 md:p-10 flex flex-col items-center '>
                                <Image src={feature.imgSrc} width={40} height={40} alt={`icon-${index}`} />
                                <h1 className='pt-2 md:pt-10 text-secondary text-[18px] font-semibold'>{feature.heading}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero2;
