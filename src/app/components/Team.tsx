"use client";
import React, { useState, useEffect } from 'react';
import SectionHeading from './shared/SectionHeading';
import TeamCard from './card/TeamCard';

const teams = [
    { name: "Dianne Russell", role: "Gym Instructor" },
    { name: "Jane Cooper", role: "Yoga Instructor" },
    { name: "Kristin Watson", role: "Pilates Trainer" },
    { name: "Wade Warren", role: "Bodybuilding Coach" },
    { name: "Esther Howard", role: "Crossfit Instructor" },
    { name: "Cody Fisher", role: "Personal Trainer" },
    { name: "Savannah Nguyen", role: "Fitness Coach" },
    { name: "Leslie Alexander", role: "Nutritionist" },
];
const Team: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4); 
    const totalItems = teams.length;
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setItemsToShow(1); 
        } else if (screenWidth >= 640 && screenWidth < 1024) {
            setItemsToShow(2); 
        } else if (screenWidth >= 1024 && screenWidth < 1280) {
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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems - itemsToShow + 1));
        }, 3000); 

        return () => clearInterval(interval);
    }, [currentIndex, itemsToShow, totalItems]);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems - itemsToShow + 1));
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (totalItems - itemsToShow + 1)) % (totalItems - itemsToShow + 1));
    };

    return (
        <div className="mx-8 md:mx-auto max-w-[1320px] relative">
            <div className="mb-14">
                <SectionHeading subHeading="Team" heading="Meet The Pros" />
            </div>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                        }}
                    >
                        {teams.map((team, index) => (
                            <div
                                key={index}
                                className="w-[100%] sm:w-[50%] md:w-[33%] lg:w-[25%] p-2 flex-shrink-0 transition-transform transform hover:scale-105 hover:z-10"
                            >
                                <TeamCard name={team.name} role={team.role} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex gap-4 p-5 absolute top-20 md:top-8 right-0">
                <button
                    onClick={handlePrev}
                    className="bg-transparent border-2 border-[#E67529] px-5 py-3 hover:bg-[#E67529] text-[#E67529] hover:text-white rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="hover:bg-[#E67529] hover:text-white text-[#E67529] border-[#E67529] border-2 rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Team;
