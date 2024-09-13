"use client";
import React, { useState } from 'react';
import SectionHeading from './shared/SectionHeading';
import { GoArrowRight } from 'react-icons/go';
import { PiBowlFoodFill } from "react-icons/pi";
import { GiCycling } from "react-icons/gi";
import { FaHandRock } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { TbSwimming } from "react-icons/tb";
import { FaPersonRunning } from "react-icons/fa6";
const serviceData = [
    { image: PiBowlFoodFill, title: "Nutrition Counseling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: FaHandRock, title: "gym fitness class", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GiWeightLiftingUp, title: "Power Lifting", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: CgGym, title: "Body Building", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GiCycling, title: "Cycling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GrYoga, title: "Yoga", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: TbSwimming, title: "Swimming", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: FaPersonRunning, title: "Running", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GiCycling, title: "Cycling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GrYoga, title: "Yoga", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: TbSwimming, title: "Swimming", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: FaPersonRunning, title: "Running", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight }
];
const Services: React.FC = () => {
    const [allServices, setAllServices] = useState(false);
    const visibleServices =  allServices? serviceData: serviceData.slice(0,8);
    return (
        <section className='max-w-[1320px] mx-8 md:mx-auto my-10'>
            <SectionHeading subHeading='Service' heading='Services We are Offering' />
            <div className='relative flex justify-end bottom-10'>
                <button className=' text-primary px-8 py-4 shadow-custom-light rounded duration-300  hover:scale-105'
                onClick={()=> setAllServices(true)}> <u> { allServices? "All services Displayed" :"All Service"}</u></button>
            </div>
            <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[20px]'>
                {visibleServices.map((service, index) => (
                    <div key={index} className='shadow-custom-light bg-white hover:bg-primary group rounded p-6 transition-transform transform hover:scale-105'>
                        <div className='flex items-center gap-4  '>
                            <div className='rounded-full bg-primary p-4 group-hover:bg-white'>
                                <service.image className='text-white text-3xl group-hover:text-primary' />
                            </div>
                            <h4 className='service-heading group-hover:text-white'>{service.title}</h4>
                        </div>
                        <p className='mt-4 service-description group-hover:text-white'>{service.description}</p>
                        <div className='mt-6 flex gap-2 items-center'>
                            <p className='service-description group-hover:text-white'>{service.button}</p>
                            <service.icon className='text-xl group-hover:text-white' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;