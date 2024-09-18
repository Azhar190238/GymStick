import Image from 'next/image';
import React from 'react';

const BlogDetailsContent:React.FC = () => {
    return (
        <div className=''>
        <Image className='rounded w-full h-full' src='/images/classes/5.png' width={872} height={478} alt='image'></Image>
        <h1 className='capitalize text-[28px] font-semibold text-secondary my-10'>gym fitness class</h1>
        <p className='para1 text-justify'>Boxers engage in intense cardiovascular exercises to build endurance and stamina. This includes activities like the running, skipping rope, and high-intensity interval training (HIIT) to improve overall cardiovascular fitness. Strength and Power Training: Boxers focus on building functional strength and explosive power to deliver powerful punches. This involves weightlifting exercises, plyometrics, and bodyweight exercises such as push-ups, pull-ups, core exercises. boxers engage in intense cardiovascular.</p>
        <p className='para1 mt-5 text-justify'>During the CrossFit Boxing Challenge, you’ll engage in a dynamic workout regimen that incorporates elements of strength training, cardiovascular conditioning, agility, and coordination. Under the guidance of experienced coaches, you’ll learn proper boxing techniques, footwork, and defensive maneuvers, all while pushing yourself through a series of intense CrossFit workouts. Each session will challenge your physical and mental resilience, </p>
        <div className='my-10  shadow-custom-light rounded '>
           <p className='para1 py-14 px-6'>We offer a wide range of fitness services and programs to cater to different fitness levels, interests, and goals. Whether you’re looking for personal training, group fitness classes, specialized workouts, or nutritional guidance, we have options to suit your needs.</p>
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
    );
};

export default BlogDetailsContent;