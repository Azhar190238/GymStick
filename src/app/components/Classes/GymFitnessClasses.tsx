import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaHandRock } from 'react-icons/fa';
const GymFitnessClasses: React.FC = () => {
    const services = [
        'power lifting', 'Body Building', 'swimming', 'yoga and meditation', 'cycling'
    ];
    return (
        <div className='max-w-[1320px] mx-auto'>
            <h1 className='text-secondary text-5xl font-bold font-montserrat capitalize'>gym fitness class</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-14 gap-6'>
                <div className='col-span-1 border-[1px] h-fit rounded'>
                    <div className='p-9'>
                        <h1 className='capitalize text-secondary text-[28px] font-semibold mb-4'>all service</h1>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex space-x-3 items-center ${index < services.length - 1 ? 'pb-6 border-b-[1px] pt-6' : 'pt-6'}`}
                            >
                                <FaArrowRight className='text-sm' />
                                <p className='para1'>{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className=''>
                        <Image className='rounded w-full h-full' src='/images/classes/1.png' width={872} height={478} alt='image'></Image>
                        <h1 className='capitalize text-[28px] font-semibold text-secondary my-10'>gym fitness class</h1>
                        <p className='para1 text-justify'>Boxers engage in intense cardiovascular exercises to build endurance and stamina. This includes activities like the running, skipping rope, and high-intensity interval training (HIIT) to improve overall cardiovascular fitness. Strength and Power Training: Boxers focus on building functional strength and explosive power to deliver powerful punches. This involves weightlifting exercises, plyometrics, and bodyweight exercises such as push-ups, pull-ups, core exercises. boxers engage in intense cardiovascular.</p>
                        <p className='para1 mt-5 text-justify'>During the CrossFit Boxing Challenge, you’ll engage in a dynamic workout regimen that incorporates elements of strength training, cardiovascular conditioning, agility, and coordination. Under the guidance of experienced coaches, you’ll learn proper boxing techniques, footwork, and defensive maneuvers, all while pushing yourself through a series of intense CrossFit workouts. Each session will challenge your physical and mental resilience, </p>
                        <div className='my-10 flex flex-col md:flex-row shadow-custom-light justify-between gap-28'>
                            <div className='p-8'>
                                <h1 className='flex items-center space-x-3 capitalize text-xl font-semibold text-primary'><span><FaHandRock className='mr-2' /> </span> Diverse Range of Services:</h1>
                                <p className='para1 leading-[170%] mt-5 text-justify max-w-[330px]'>We offer a wide range of fitness services and programs to cater to different fitness levels, interests, and goals.</p>
                            </div>
                            <div className='p-8'>
                                <h1 className='flex items-center space-x-3 capitalize text-xl font-semibold text-primary'><span><FaHandRock className='mr-2' /> </span> Diverse Range of Services:</h1>
                                <p className='para1 leading-[170%] mt-5 text-justify max-w-[330px]'>We offer a wide range of fitness services and programs to cater to different fitness levels, interests, and goals.</p>
                            </div>
                        </div>
                        <p className='para1 text-justify my-10'>We offer a wide range of fitness services and programs to cater to different fitness levels, interests, and goals. Whether you’re looking for personal training, group fitness classes, specialized workouts, or nutritional guidance, we have options to suit your needs.</p>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <Image className='rounded w-full h-full' src='/images/classes/2.png' width={872} height={478} alt='image'></Image>
                            <Image className='rounded w-full h-full' src='/images/classes/3.png' width={872} height={478} alt='image'></Image>
                        </div>
                        <h1 className='capitalize text-[28px] font-semibold text-secondary my-10'>gym fitness class</h1>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='space-y-4'>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Progressive overload.</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                            </div>
                            <div className='space-y-4'>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Adjust calorie intake as needed</p>  </div>
                                <div className='flex space-x-2'><Image className='rounded w-6 h-6' src='/images/classes/frame.svg' width={24} height={24} alt='image'></Image><p className='para2'>Progressive overload.</p>  </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
export default GymFitnessClasses;

