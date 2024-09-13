 "use client";
import React, { useState } from 'react';
import SectionHeading from './shared/SectionHeading';
import NewsCard from './card/NewsCard';

const allNews = [
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
];

const AllNews: React.FC = () => {
    const [showAll, setShowAll] =useState(false)
    const visibleNews = showAll? allNews :allNews.slice(0,3);

    return (
        <div className='mx-auto max-w-[1320px] my-10'>
            <div className='flex flex-row justify-between '>
                <div>
                    <SectionHeading
                        subHeading="Blog  And News"
                        heading="Take a look at our latest news"
                    />
                </div>
                <div className='relative top-16'>
                    <button 
                        className='text-primary px-8 py-4 shadow-custom-light rounded duration-300  hover:scale-105'
                        onClick={() => setShowAll(true)}
                    >
                        <u>{showAll ? 'All News Displayed' : 'All News'}</u>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {
                    visibleNews.map((news, index) => (
                        <NewsCard key={index} heading={news.heading} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllNews;
