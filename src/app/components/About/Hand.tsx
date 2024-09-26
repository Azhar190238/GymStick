import React from 'react';
import Image from 'next/image';

const Hand = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-20'>
            <div className='shadow-custom-light h-96 w-80 bg-gray-800 relative mx-auto rounded-md group '>

                <Image 
                    src='/images/Gallary/bg.png' 
                    width={406} 
                    height={147} 
                    alt='image' 
                    className='absolute transform transition-transform duration-1000 ease-in-out group-hover:translate-y-[60px] group-hover:translate-x-[-205px] translate-y-[250px] translate-x-[-354px] bottom-0 left-0' 
                />
            </div>
        </div>
    );
};

export default Hand;
