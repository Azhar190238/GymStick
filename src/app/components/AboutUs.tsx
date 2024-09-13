import React from 'react';
import SectionHeading from './shared/SectionHeading';
import Image from 'next/image';
const AboutUs: React.FC = () => {
    return (
        <div className='mx-auto max-w-[1320px]'>
            <div className='flex flex-col lg:flex-row mx-8 md:mx-0 gap-24'>
                <div className='w-4/5 relative'>
                    <div className='h-auto max-w-full'>
                        <Image src='/images/AboutUs/1.png' layout='responsive' width={560} height={520} alt="bg" className='w-full h-auto' />
                    </div>
                    {/* Second image positioned over the first image */}
                    <div className='absolute left-14 top-2 md:top-4 md:left-20 w-[70%] h-auto'>
                        <Image src='/images/AboutUs/man.png' layout='responsive' width={386} height={500} alt="bg" className='w-full h-auto' />
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div>
                        <SectionHeading
                            subHeading="About Us"
                            heading="we are pushing the limit of your core strength"
                        ></SectionHeading>
                    </div>
                    <div className='space-y-12'>
                        <p className='text-justify para1 mt-12 '>Welcome to this comprehensive guide on the Apple Vision Pro features, where we
                            delve deep into the innovative advancements of this ground technology. Apple
                            has always been at technological innovation, and the Vision Pro features </p>
                        <button className="mx-auto rounded bg-[#E67529] shadow-custom-light text-[18px] capitalize  duration-300  hover:scale-105 font-medium text-white px-8 py-4">
                            read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;