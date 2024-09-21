'use client';
import React, { useEffect, useState } from 'react';
import ExpartCard from './card/ExpartCard';

const ExpertTeam: React.FC = () => {

    const [itemsToShow, setItemsToShow] = useState(3);
    const banners = [
        {
            title: "Alan Bagham",
            description: "Gym Instructor",
        },
        {
            title: "John Doe",
            description: "Fitness Coach",
        },
        {
            title: "Jane Smith",
            description: "Yoga Trainer",
        },
        {
            title: "Tom Baker",
            description: "Personal Trainer",
        },
        {
            title: "Sarah Lee",
            description: "Nutritionist",
        },
        {
            title: "Emily Davis",
            description: "Wellness Coach",
        },
    ];
    const itemsCount = banners.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setItemsToShow(1);  
        } else if (screenWidth >= 640 && screenWidth < 1024) {
            setItemsToShow(2);  
        } else {
            setItemsToShow(3); 
        }
    };
    useEffect(() => {
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (itemsCount - itemsToShow + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, itemsToShow, itemsCount]);
    const handleNext = () => {
        if (currentIndex < itemsCount - itemsToShow) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className='max-w-[1320px] px-8 md:px-0 mx-auto my-20 relative'>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 mr-0 md:mr-6 ${itemsToShow === 1 ? 'w-[100%]' : itemsToShow === 2 ? 'w-[50%]' : 'w-[31.8%]'
                                }`}
                        >
                            <ExpartCard banner ={banner}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="bg-transparent border-2 border-[#E67529] px-5 py-3 hover:bg-[#E67529] text-[#E67529] hover:text-white rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="hover:bg-[#E67529] hover:text-white text-[#E67529] border-[#E67529]  border-2 rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default ExpertTeam;
