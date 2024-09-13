"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../shared/SectionHeading';
interface Descriptions {
    mission: string;
    vision: string;
    values: string;
}
const AboutUs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

    const descriptions: Descriptions = {
        mission: "Our team of experienced trainers and instructors are dedicated to providing you with the guidance and support you need to reach your full potential. Whether you're a seasoned athlete or just starting out, we're here to help you on your fitness journey. Join our community today and discover the power of a healthy, active lifestyle.",
        vision: "We aim to create a world where everyone has access to the knowledge and resources to live a healthy and active life, empowering individuals to take control of their fitness and well-being.",
        values: "Our core values are integrity, dedication, and community. We believe in fostering a supportive environment where everyone can thrive, regardless of their fitness level."
    };
    const tabs: Array<'mission' | 'vision' | 'values'> = ['mission', 'vision', 'values'];

    return (
        <div className='mx-auto max-w-[1320px]'>
            <div className='flex flex-col lg:flex-row-reverse mx-8 md:mx-0 gap-24'>
                <div className='w-4/5 relative mt-20'>
                    <div className='h-[500px]  max-w-full'>
                        <Image src='/images/Home2/about/bg.png' layout='' width={500} height={500} alt="bg" className='w-full h-[400px]' />
                    </div>
                    <div className='absolute left-14  -top-20 md:left-20 w-[70%] h-auto'>
                        <Image src='/images/Home2/about/1.png' layout='responsive' width={386} height={620} alt="bg" className='w-full h-auto' />
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div>
                        <div className='relative max-w-[230px]'>
                            <SectionHeading
                                subHeading="about us"
                                heading="welcome"
                            />
                            <Image className='absolute top-5 -right-10' src='/images/Home2/about/Design.png' width={46} height={38} alt='design'></Image>
                        </div>
                        <div className='mt-10'>
                        <p className='text-justify para1 mb-10 '>Welcome to this comprehensive guide on the Apple Vision Pro features, where we
                            delve deep into the innovative advancements of this ground technology. Apple
                            has always been at technological innovation, and the Vision Pro features </p>
                            <div className='space-x-6'>
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)} 
                                        className={`text-[18px] capitalize font-bold duration-300 hover:scale-105 hover:border-b-2 ${activeTab === tab ? 'border-primary text-primary' : 'text-secondary'} `}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <p className='text-justify mt-8'>{descriptions[activeTab]}</p>
                        </div>
                        <button className="mx-auto mt-[50px] rounded bg-[#E67529] shadow-custom-light text-[18px] capitalize  duration-300  hover:scale-105 font-medium text-white px-8 py-4">
                            service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;