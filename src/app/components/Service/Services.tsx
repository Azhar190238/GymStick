
'use client';

import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { GiCycling, GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { TbSwimming } from "react-icons/tb";
import { FaHandRock } from "react-icons/fa";
import BasicComponent from '../shared/BasicComponent';
import { Pagination } from 'antd';
import Link from 'next/link'; 
import ServiceCard from '../card/ServiceCard';

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
                        <ServiceCard key={service.title} service ={service} />
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
