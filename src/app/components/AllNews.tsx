"use client";
import React from 'react'; 
import SectionHeading from './shared/SectionHeading';
import NewsCard from './card/NewsCard';
import Link from 'next/link';

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
  

const AllNews: React.FC = () => {
    const latestNews = allNews.slice(0, 3);


    return (
        <div className='mx-auto max-w-[1320px] my-10'>
            <div className='flex flex-row justify-between'>
                <div>
                    <SectionHeading
                        subHeading="Blog And News"
                        heading="Take a look at our latest news"
                    />
                </div>
                <div className='relative top-16'>
               <Link href='/blog'>
               <button 
                        className='text-primary px-8 py-4 rounded duration-300 hover:scale-105'
                    >
                        <u>All News</u>
                    </button>
               </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {latestNews.map((news, index) => (
                    <NewsCard key={index} heading={news.heading} image={news.image} _id ={news._id} />
                ))}
            </div>
        </div>
    );
};

export default AllNews;
