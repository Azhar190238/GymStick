'use client'
import React, { useState, useEffect } from "react";
import AboutCard from "../card/AboutCard";

const About: React.FC = () => {
    const banners = [
        { _id: 1, title: "Boxing", image: "/images/Home3/1.png" },
        { _id: 2, title: "Cycling", image: "/images/Home3/2.png" },
        { _id: 3, title: "Workout", image: "/images/Home3/3.png" },
        { _id: 4, title: "Boxing", image: "/images/Home3/1.png" },
        { _id: 5, title: "Cycling", image: "/images/Home3/2.png" },
        { _id: 6, title: "Workout", image: "/images/Home3/3.png" },
        { _id: 7, title: "Boxing", image: "/images/Home3/1.png" },
        { _id: 8, title: "Cycling", image: "/images/Home3/2.png" },
        { _id: 9, title: "Workout", image: "/images/Home3/3.png" },
        { _id: 10, title: "Boxing", image: "/images/Home3/1.png" },
        { _id: 11, title: "Cycling", image: "/images/Home3/2.png" },
        { _id: 12, title: "Workout", image: "/images/Home3/3.png" }
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    // Define the function inside the useEffect or outside the component
    useEffect(() => {
        const calculateSlidesPerView = () => {
            if (window.innerWidth >= 1024) return 3; 
            if (window.innerWidth >= 768) return 2; 
            return 1;
        };

        const handleResize = () => {
            setSlidesPerView(calculateSlidesPerView());
        };

        window.addEventListener("resize", handleResize);
        setSlidesPerView(calculateSlidesPerView());
        return () => window.removeEventListener("resize", handleResize);
    }, []); 

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => 
                prevSlide === banners.length - slidesPerView ? 0 : prevSlide + 1
            );
        }, 2000); 

        return () => clearInterval(interval); 
    }, [activeSlide, slidesPerView, banners.length]);

    const handleNext = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === banners.length - slidesPerView ? 0 : prevSlide + 1
        );
    };

    const handlePrev = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === 0 ? banners.length - slidesPerView : prevSlide - 1
        );
    };

    return (
        <div className="w-full mx-auto max-w-[1320px] overflow-hidden pt-20 my-40">
            <div
                className="flex transition-transform duration-700"
                style={{
                    transform: `translateX(-${activeSlide * (100 / slidesPerView)}%)`,
                    gap: slidesPerView === 1 ? "0px" : "24px",
                }}
            >
                {banners.map((banner) => (
                   <AboutCard key={banner._id} banner={banner} />
                ))}
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
                    className="hover:bg-[#E67529] hover:text-white text-[#E67529] border-[#E67529] border-2 rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default About;
