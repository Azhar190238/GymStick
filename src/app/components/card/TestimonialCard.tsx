import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
import Link from 'next/link';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
interface testimonialProps {
    reviews?: any;
}
const TestimonialCard: React.FC<testimonialProps> = ({ reviews }) => {
    const [value, setValue] = useState(3);
    return (
        <Link href={`/testimonial/${reviews?._id}`} passHref>
            <div className='relative h-full md:h-[450px]'>
                <div className='  rounded h-full md:h-[410px] bg-slate-50 testimonial-shape px-6 pt-6 pb-[120px]  hover:scale-105 transition-all duration-300'>
                    <div className='mb-10 '>
                        <Flex gap="middle" vertical>
                            <Rate className='text-primary' tooltips={desc} onChange={setValue} value={value} />
                        </Flex>
                    </div>
                    <p className='text-justify para1 pb-6'>{reviews?.review}</p>
                </div>
                <div className='absolute bottom-0 px-16 space-y-2'>
                    <h1 className='subHeading'>{reviews?.name}</h1>
                    <p className='text-[18px] text-[#534C4C]'>{reviews?.role}</p>
                </div>
            </div>
        </Link>
    );
};

export default TestimonialCard;