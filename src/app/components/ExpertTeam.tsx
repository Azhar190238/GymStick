'use client'
import React, { useState } from 'react';
import ExpartCard from './card/ExpartCard';

const ExpertTeam: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [shareIconHoveredIndex, setShareIconHoveredIndex] = useState<number | null>(null); // Track hover state for each share icon

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

    const itemsToShow = 3;  // Items to display in one slide
    const itemsCount = banners.length;

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handles the next slide logic
    const handleNext = () => {
        if (currentIndex < itemsCount - itemsToShow) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Handles the previous slide logic
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className='max-w-[1320px] mx-auto my-20 relative'>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className="w-[31.8%] flex-shrink-0 mr-6 " // Ensure no unwanted margins or paddings
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <ExpartCard
                                title={banner.title}
                                description={banner.description}
                                hoveredIndex={hoveredIndex}
                                shareIconHoveredIndex={shareIconHoveredIndex}
                                setShareIconHoveredIndex={setShareIconHoveredIndex}
                                index={index}
                            />
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

            {/* <div className="flex justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="bg-transparent border-2 border-[#FF3811] px-5 py-3 text-[#FF3811] rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                    // disabled={currentIndex === 0}
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="bg-[#FF3811] text-white rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                    // disabled={currentIndex >= itemsCount - itemsToShow}
                >
                    ❯
                </button>
            </div> */}
        </div>
    );
};

export default ExpertTeam;
