import Image from 'next/image';
import React from 'react';

const Brand: React.FC = () => {

  const brandImages = [
    { src: '/images/Partner/1.png', alt: 'Partner 1' },   { src: '/images/Partner/2.png', alt: 'Partner 2' },    { src: '/images/Partner/3.png', alt: 'Partner 3' },
    { src: '/images/Partner/5.png', alt: 'Partner 5' },   { src: '/images/Partner/4.png', alt: 'Partner 4' },
  
  ];

  return (
    <div className='bg-[#31353D] mt-24'>
      <div className='max-w-[1320px] mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-between ml-10'>
          {brandImages.map((image, index) => (
            <Image key={index} src={image.src} width={100} height={74} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
