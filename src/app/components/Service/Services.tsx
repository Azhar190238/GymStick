
'use client';

import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { GiCycling, GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { TbSwimming } from "react-icons/tb";
import { FaHandRock } from "react-icons/fa";
import Image from 'next/image';
import BasicComponent from '../shared/BasicComponent';
import { Pagination } from 'antd';
import Link from 'next/link'; // Import Link from next/link

interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
    button: string;
    iconRight: React.ElementType;
    image: string;
}

const serviceData: Service[] = [
    { icon: FaHandRock, title: "Gym and Fitness Class", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GiWeightLiftingUp, title: "Power Lifting", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: CgGym, title: "Body Building", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GrYoga, title: "Yoga Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: TbSwimming, title: "Swimming Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GiCycling, title: "Cycling Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: FaHandRock, title: "Gym and Fitness Class", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GiWeightLiftingUp, title: "Power Lifting", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: CgGym, title: "Body Building", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GrYoga, title: "Yoga Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: TbSwimming, title: "Swimming Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GiCycling, title: "Cycling Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: FaHandRock, title: "Gym and Fitness Class", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GiWeightLiftingUp, title: "Power Lifting", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: CgGym, title: "Body Building", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GrYoga, title: "Yoga Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: TbSwimming, title: "Swimming Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
    { icon: GiCycling, title: "Cycling Classes", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/Services/1.png' },
];

const ITEMS_PER_PAGE = 6;

const Services: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedServices = serviceData.slice(startIndex, endIndex);

    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <BasicComponent subHeading='Service' heading='Services We are Offering' />
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-8 md:mx-0'>
                {displayedServices.map((service, index) => (
                    <Link href={'/classes'} key={index} passHref>
                        <div className='hover:scale-105 transition-all duration-500 shadow-custom-light bg-white hover:bg-primary group rounded'>
                            <div>
                                <Image src={service.image} alt='service' width={424} height={230} />
                            </div>
                            <div className='relative bottom-8 mx-auto rounded-full w-16 bg-primary p-4 group-hover:bg-white'>
                                <service.icon className='text-white text-3xl group-hover:text-primary' />
                            </div>
                            <h4 className='text-center service-heading group-hover:text-white text-[#2B2B2B] text-[18px] font-bold'>{service.title}</h4>
                            <p className='text-center max-w-[296px] mx-auto mt-4 para-1 service-description group-hover:text-white'>{service.description}</p>
                            <div className='mt-8 pb-8 flex space-x-2 items-center justify-center'>
                                <p className='text-center service-description group-hover:text-white '>{service.button}</p>
                                <service.iconRight className='text-xl group-hover:text-white' />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination
                className='!mt-12'
                current={currentPage}
                pageSize={ITEMS_PER_PAGE}
                total={serviceData.length}
                onChange={setCurrentPage}
            />
        </section>
    );
};

export default Services;
