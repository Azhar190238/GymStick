import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
interface testimonialProps {
    reviews:string;
    name:string;
    role:string;
}
const TestimonialCard: React.FC<testimonialProps> = ({reviews, name,role})=> {
    const [value, setValue] = useState(3);
    return (
        <div className='relative h-full md:h-[450px]'>
        <div className=' shadow-2xl rounded h-full md:h-[410px] bg-slate-100 testimonial-shape px-6 pt-6 pb-[120px]'>
        <div className='mb-10'>
            <Flex gap="middle" vertical>
                <Rate className='text-primary' tooltips={desc} onChange={setValue} value={value} />
            </Flex>
        </div>
        <p className='text-justify para1 pb-6'>{reviews}</p>
        </div>
        <div className='absolute bottom-0 px-12 space-y-2'>
            <h1 className='subHeading'>{name}</h1>
            <p className='text-[18px] text-[#534C4C]'>{role}</p>
        </div>
    </div>
    );
};

export default TestimonialCard;