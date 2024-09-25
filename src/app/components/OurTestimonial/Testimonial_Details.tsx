import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

const Testimonial_Details:React.FC = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
           <div className='max-w-[510px]'>
            <h1 className='heading'>Our Testimonial</h1>
            <p className='para1 mt-10'>I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels </p>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 mb-32'>
           <div className='col-span-1'>
            <Image src='/images/Testimonial/image.png' height={424} width={424} alt='image' className='lg:max-h-[424px] h-full   lg:max-w-[424px] w-full'/>
           </div>
           <div className='col-span-2'>
              <h1 className='text-[28px] font-medium text-primary my-4'>Sandra Garica</h1>
              <h3 className='text-secondary text-[18px]'>Manager</h3>
             
              <Rate className='text-primary my-6' disabled defaultValue={5} />
              
              <div className='border rounded mt-6'>
                <p className='para1 p-6 leading-[160%] '>I have been hiring people in this space for a number of years and I have never seen this level of the more profe
                ssionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I  that can I have been hiring people in this space for a <br /> I have been hiring people in this space for a number of years and I have never seen this level of the more profe
                ssionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I  that can I have been hiring people in this space for a</p>
              </div>
           </div>
           </div>
        </div>
    );
};

export default Testimonial_Details;