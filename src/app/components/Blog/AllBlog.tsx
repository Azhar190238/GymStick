"use client";
import React from 'react';
import NewsCard from '../card/NewsCard';


const allNews = [
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
    { heading: "Best Oral weight lifting Tips You should Follow." },
];

const AllBlogs: React.FC = () => {
    return (
        <div className='mx-auto max-w-[1320px] my-10'>
            <h1 className='heading !text-3xl md:!text-[48px] mb-14'>took a look  at our latest news</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {
                    allNews.map((news, index) => (
                        <NewsCard key={index} heading={news.heading} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllBlogs;
