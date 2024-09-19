"use client";
import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import BlogDetailsContent from './BlogDetailsContent';
const allNews = [
    {
        "_id": "1",
        "image": "/images/Blog/1.png",
        "title": "The Future of Web Development",
        "date": "2024-09-20"
    },
    {
        "_id": "2",
        "image": "/images/Blog/2.png",
        "title": "Understanding React Hooks",
        "date": "2024-09-19"
    },
    {
        "_id": "3",
        "image": "/images/Blog/3.png",
        "title": "Mastering JavaScript ES6",
        "date": "2024-09-18"
    },
    {
        "_id": "4",
        "image": "/images/Blog/4.png",
        "title": "CSS Grid Layouts: A Comprehensive Guide",
        "date": "2024-09-17"
    },
    {
        "_id": "5",
        "image": "/images/Blog/1.png",
        "title": "Node.js Best Practices",
        "date": "2024-09-16"
    }
];

const services = [
    'best gym equipment', 'best institute certificate', 'swimming', 'yoga and meditation', 'cycling'
];
 
const tags = [
    'facts', 'fitness', 'health', 'medicine', 'lifestyle','nutrition','strength','women’s health'
];
const BlogDetails: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const filteredNews = allNews.filter(news =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const displayedNews = filteredNews.slice(0, 4);
    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    return (
        <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                    <div className='p-6 shadow-custom-light rounded mb-10'>
                        <Input
                            className='p-[16px] bg-[#FF4E2533] text-[16px] !rounded text-secondary !border-primary'
                            placeholder="Search Here..."
                            onChange={(e) => handleSearch(e.target.value)}
                            suffix={<SearchOutlined className='ml-2 md:ml-5 lg:ml-12 text-2xl' />}
                        />
                    </div>
                    <div className='shadow-custom-light py-10 px-6'>
                        <h1 className='text-[28px] font-semibold leading-[160%] text-secondary'>Latest News</h1>
                        {displayedNews.length > 0 ? (
                            displayedNews.map(news => (
                                <div key={news._id} className='flex flex-row gap-5 pt-5'>
                                    <div className='h-[86px] w-[77px] rounded'>
                                        <Image src={news.image} alt={news.title} height={86} width={77} />
                                    </div>
                                    <div className='max-w-[210px] items-start justify-start space-y-1 flex flex-col'>
                                        <h1 className='text-xl text-secondary hover:text-primary font-medium leading-[140%] capitalize'>{news.title}</h1>
                                        <p className='text-primary opacity-60 text-[14px]'>{news.date}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No news items found</p>
                        )}
                    </div>
                    <div className=' shadow-custom-light h-fit rounded mt-10'>
                    <div className='p-9'>
                        <h1 className='capitalize text-secondary text-[28px] font-semibold mb-4'>Popular Categories</h1>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex space-x-3 items-center group ${index < services.length - 1 ? 'pb-6 border-b-[1px] pt-6' : 'pt-6'}`}
                            >
                                <FaArrowRight className='text-sm group-hover:text-primary' />
                                <p className='para1 group-hover:text-primary'>{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='shadow-custom-light px-8 py-10 mt-10 rounded'>
                <h1 className='capitalize text-secondary text-[28px] font-semibold mb-4'>Popular Tags</h1>
                <div className='gap-3 flex justify-center flex-wrap'>
                 {
                    tags.map((tag,index)=> 
                         <button key={index} className='shadow-custom-light px-4 hover:border-2 hover:border-primary hover:text-primary py-2 leading-[160%] tex-[16px] font-medium capitalize'>
                       {tag}
                        </button>
                       
                    )
                 }
                     </div>       
                </div>
                </div>
                <div className="col-span-2">
                    <BlogDetailsContent></BlogDetailsContent>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
