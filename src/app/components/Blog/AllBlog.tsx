"use client";
import React from 'react';
import NewsCard from '../card/NewsCard';

const allNews = [
    { 
      _id: "1", 
      heading: "Best Oral Weight Lifting Tips You Should Follow", 
      image: "/images/News/1.png" 
    },
    { 
      _id: "2", 
      heading: "Best Oral Weight Lifting Tips You Should Follow", 
      image: "/images/News/1.png" 
    },
    { 
      _id: "3", 
      heading: "Best Oral Weight Lifting Tips You Should Follow", 
      image: "/images/News/1.png" 
    },
    { 
      _id: "4", 
      heading: "Best Oral Weight Lifting Tips You Should Follow", 
      image: "/images/News/1.png" 
    },
    { 
      _id: "5", 
      heading: "Best Oral Weight Lifting Tips You Should Follow", 
      image: "/images/News/1.png" 
    },
    { 
      _id: "6", 
      heading: "Best Oral Weight Lifting Tips You Should Follow", 
      image: "/images/News/1.png" 
    }
  ];
  

const AllBlogs: React.FC = () => {
    return (
        <div className='mx-auto max-w-[1320px] my-10'>
            <h1 className='heading !text-3xl md:!text-[48px] mb-14'>took a look  at our latest news</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {
                    allNews.map((news, index) => (
                        <NewsCard key={index} heading={news.heading} image={news.image} _id={news._id} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllBlogs;
