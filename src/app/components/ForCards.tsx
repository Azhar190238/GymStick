import Image from 'next/image';
import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
const ForCards: React.FC = () => {
    return (
        <div className='max-w-[1320px] mx-auto my-20 relative'>
            <div className='custom-shape bg-gray-500 !h-[400px] !w-[420px]'>
                 
            </div>
            <Image className='h-[286px] w-[370px]  absolute top-4 left-4 ' src='/images/1.png' height={400} width={550} alt='team'></Image>
            <div className='absolute bottom-8 left-5 flex justify-between'>
                <div>
                <h1 className='text-white text-xl'>E-Commarce Landing Page</h1>
                <h3 className='text-gray-400'>Dribble</h3>
                </div>
                <div className='rounded-full w-12 h-12 flex justify-center items-center bg-gray-400 absolute -right-36 mr-2 -bottom-2'>
                <IoMdArrowRoundForward className='text-3xl -rotate-45   text-white  ' />
                </div>
            </div>
            
            

        </div>
    );
};

export default ForCards;