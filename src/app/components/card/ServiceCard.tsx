/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    service: any; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className='hover:scale-105 transition-all duration-500 shadow-custom-light bg-white hover:bg-primary group rounded'>
           
                <Image src={service.image} alt='service' width={424} height={230}  className='md:max-w-[424px] w-full '/>
          
            <div className='relative bottom-8 mx-auto rounded-full w-16 bg-primary p-4 group-hover:bg-white'>
                <service.icon className='text-white text-3xl group-hover:text-primary' />
            </div>
            <h4 className='text-center service-heading group-hover:text-white text-[#2B2B2B] text-[18px] font-bold'>
                {service.title}
            </h4>
            <p className='text-center max-w-[296px] mx-auto mt-4 para-1 service-description group-hover:text-white'>
                {service.description}
            </p>
            <div className='mt-8 pb-8 flex space-x-2 items-center justify-center'>
                <p className='text-center service-description group-hover:text-white'>
                    {service.button}
                </p>
                <service.iconRight className='text-xl group-hover:text-white' />
            </div>
        </div>
    );
};

export default ServiceCard;
