import Image from 'next/image';
import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className='max-w-[1320px] mx-8 lg:mx-auto'>
            <div className='flex w-full flex-col lg:flex-row gap-6'>
                <div className='w-full md:w-2/5'>
                    <div className='max-w-[536px] flex flex-col space-y-10 mb-[60px]'>
                    <h1 className='heading'>Welcome</h1>
                    <p className='para1 leading-[170%]'>At Gym, we believe that fitness is a quest, not just a journey. Our high end facility offers a wide range of equipment, trainer and programs to help achieve your fitness goals and transform into the best.</p>
                    </div>
                    <div className='w-full md:max-w-[536px] flex flex-col space-y-10'>
                    <h1 className='heading'>Mission</h1>
                    <p className='para1'>Our team of experienced trainers and instructors are dedicated to providing you with the guidance and support you need to reach your full potential. Whether you are a seasoned athlete or just starting out, we are here to help you on your fitness journey. Join our community today and discover the power of a healthy, active lifestyle.</p>
                    </div>
                    <button className='button mt-[50px]'>start your journey</button>
                </div>
                <div className='w-[3/5] flex flex-col md:flex-row gap-6'>
                 <Image className='max-h-[508px] max-w-[312px] flex relative md:top-[222px]'  src='/images/About/1.png' width={312} height={508} alt='image1'></Image>
                 <Image className='max-h-[707px] max-w-[424px]' src='/images/About/2.png' width={424} height={707} alt='image1'></Image>
                </div>
            </div>
        </div>
    );
};

export default Welcome;