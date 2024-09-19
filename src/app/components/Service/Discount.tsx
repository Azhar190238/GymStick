import Image from 'next/image';
import React from 'react';

const Discount: React.FC = () => {
    return (
        <div
            className='relative w-full bg-cover bg-center'
            style={{ backgroundImage: 'url(/images/discount/1.png)', minHeight: '60vh' }}
        >
            <div className="absolute top-0 left-0 h-full w-full bg-primary opacity-90"></div>
            <div className="relative max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-28 h-full px-6 py-10 lg:py-0 lg:px-0">
                <div className='flex flex-row space-x-14'>
                    <Image
                        className='max-h-[504px] hidden md:flex md:max-w-[402px] mt-[70px]'
                        src='/images/discount/2.png'
                        width={402}
                        height={504}
                        alt='Image'
                    />
                    <Image
                        className='h-24 w-24 my-auto relative top-20'
                        src='/images/discount/3.png'
                        width={97}
                        height={94}
                        alt='Image2'
                    />
                </div>

                <div className='space-y-6 my-12'>
                    <h2 className='text-white font-semibold text-[28px] lg:text-[32px] capitalize'>
                        fitness service in this winter
                    </h2>
                    <h1 className='text-white font-semibold font-montserrat text-[50px] lg:text-[100px] capitalize'>
                        30% off
                    </h1>
                    <div className='max-w-[408px] bg-white rounded capitalize'>
                        <p className='px-[26px] py-[13px] text-primary font-semibold text-lg lg:text-xl'>
                            when registering for the first time
                        </p>
                    </div>
                    <p className='max-w-[648px] text-white text-sm lg:text-base'>
                        At Gym, we believe that fitness is a quest, not just a journey. Our high-end facility offers a wide range of equipment, trainers, and programs to help achieve your fitness goals and transform into the best.
                    </p>
                    <button className='px-[24px] lg:px-[32px] py-[12px] lg:py-[16px] bg-white text-primary rounded capitalize text-[14px] lg:text-[16px] font-medium'>
                        All services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discount;
