// import React from 'react';
// import FeatureCard from './FeatureCard';

// const featureData = [
//   { image: "1.png", title: "Scheduling", description: "Book your favorite classes online" },
//   { image: "2.png", title: "Tracking", description: "Monitor your progress easily" },
//   { image: "3.png", title: "Support", description: "24/7 customer support available" },
//   { image: "4.png", title: "Flexibility", description: "Flexible class schedules for you" },
//   { image: "1.png", title: "Scheduling", description: "Book your favorite classes online" },
//   { image: "2.png", title: "Tracking", description: "Monitor your progress easily" },
//   { image: "3.png", title: "Support", description: "24/7 customer support available" },
//   { image: "4.png", title: "Flexibility", description: "Flexible class schedules for you" },
// ];

// const Feature: React.FC = () => {
//   return (
//     <div className='max-w-[1320px] mx-auto my-20'>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
//         {featureData.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             image={feature.image}
//             title={feature.title}
//             description={feature.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Feature;
"use client";
import React, { useState } from 'react';
import FeatureCard from './card/FeatureCard';

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
    const itemsToShow = 4;
    const itemsCount = featureData.length;
    const maxIndex = Math.ceil(itemsCount / itemsToShow) - 1;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (itemsCount - itemsToShow + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (itemsCount - itemsToShow + 1)) % (itemsCount - itemsToShow + 1));
    };

    return (
        <div className='relative max-w-[1320px] mx-auto my-20'>
            <div className='overflow-hidden'>
                <div
                    className='flex transition-transform duration-300'
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {featureData.map((feature, index) => (
                        <div key={index} className='w-[25%] p-2 flex-shrink-0'>
                            <FeatureCard
                                image={feature.image}
                                title={feature.title}
                                description={feature.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="bg-transparent  hover:bg-[#E67529] text-[#E67529] hover:text-white rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                   O
                </button>
                O
                <button
                    onClick={handleNext}
                    className="hover:bg-[#E67529] hover:text-white text-[#E67529] border-[#E67529]  flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                   O
                </button>
            </div>
        </div>
    );
};

export default Feature;
