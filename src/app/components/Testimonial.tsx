"use client";
import TestimonialCard from './card/TestimonialCard';
import SectionHeading from './shared/SectionHeading';
import React, { useEffect, useState } from 'react';

const Testimonial = () => {
    const allReviews = [
        { review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Azhar", role: "Manager"},
        { review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Azhar", role: "Manager1"},
        { review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Azhar", role: "Manager2"},
        { review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Azhar", role: "Manager3"},
        { review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Azhar", role: "Manager4"},
    ];
    const [itemsToShow, setItemsToShow] = useState(2); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setItemsToShow(1); 
        } else {
            setItemsToShow(2); 
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
        if (currentIndex < allReviews.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };
    return (
        <div className='max-w-[1320px] mx-8 md:mx-auto my-20 '>
            <div className='w-full flex flex-col lg:flex-row gap-11'>
                <div className="overflow-hidden w-3/5">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {allReviews.map((review, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 ${itemsToShow === 1 ? 'w-full' : 'w-1/2'} px-4`} 
                            >
                                <TestimonialCard
                                    reviews={review.review}
                                    name={review.name}
                                    role={review.role}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-4'>
                    <div className='mb-10'>
                        <SectionHeading
                            subHeading="Testimonial"
                            heading="Our Client Feedback"
                        />
                    </div>
                    <p className='para1 max-w-[500px]'>
                        I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that understands your needs.
                    </p>
                    <div className="flex justify-start gap-4 mt-6">
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
            </div>
        </div>
    );
};

export default Testimonial;
