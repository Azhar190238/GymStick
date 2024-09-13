"use client";
import React, { useState, useEffect } from 'react';
import FeatureCard from './card/FeatureCard';
import BasicComponent from './shared/BasicComponent';
const featureData = [
    { image: "1.png", title: "Scheduling", description: "Book your favorite classes online" },
    { image: "2.png", title: "Personal Training", description: "Get personalized training plans" },
    { image: "3.png", title: "Group Training", description: "Join a variety of group classes" },
    { image: "4.png", title: "Flexibility", description: "Flexible class schedules for you" },
    { image: "1.png", title: "Scheduling", description: "Book your favorite classes online" },
    { image: "2.png", title: "Tracking", description: "Monitor your progress easily" },
    { image: "3.png", title: "Support", description: "24/7 customer support available" },
    { image: "4.png", title: "Flexibility", description: "Flexible class schedules for you" },
];
const Feature: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4); 
    const itemsCount = featureData.length;
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setItemsToShow(1);  
        } else if (screenWidth >= 640 && screenWidth < 1024) {
            setItemsToShow(3);  
        } else {
            setItemsToShow(4); 
        }
    };
    useEffect(() => {
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, []);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (itemsCount - itemsToShow + 1));
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (itemsCount - itemsToShow + 1)) % (itemsCount - itemsToShow + 1));
    };
    return (
        <div className='relative max-w-[1320px] px-10 md:px-0 mx-auto mb-20'>
            <div className=' flex justify-center '>
            <BasicComponent 
            subHeading="Features" 
            heading="Why Choose Us?" 
        />
            </div>
            <div className='overflow-hidden'>
                <div
                    className='flex  transition-transform duration-300'
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {featureData.map((feature, index) => (
                        <div key={index} className={`w-[100%] sm:w-[33%] lg:w-[25%] p-2 transition-transform transform hover:scale-105 flex-shrink-0`}>
                            <FeatureCard
                                image={feature.image}
                                title={feature.title}
                                description={feature.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex px-32 md:px-0 md:justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="border-2 border-primary p-[4px] rounded-full hover:bg-[#E67529] text-[#E67529]"
                >                
                </button>
                <button
                    
                    className="border-2 border-primary p-[4px] rounded-full bg-[#E67529] text-[#E67529]"
                >
                </button>
                <button
                    onClick={handleNext}
                    className="border-2 border-primary p-[4px] rounded-full hover:bg-[#E67529] text-[#E67529]"
                >
                </button>
            </div>
       </div>
    );
};
export default Feature;

