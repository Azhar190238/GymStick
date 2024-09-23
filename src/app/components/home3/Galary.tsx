import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import BasicComponent from '../shared/BasicComponent';

const ImageContainer: React.FC<{ imgSrc: string; alt: string }> = ({ imgSrc, alt }) => (

    <div className='relative z-10 w-full md:max-w-[424px]  md:max-h-[350px]'>
        <Image
            src={imgSrc}
            alt={alt}
            preview={true}
            style={{
                borderRadius: '4px',
            }}
        />
    </div>

);

const Gallery: React.FC = () => {
    const images = [
        { imgSrc: '/images/Gallary/1.png', alt: 'image1' },
        { imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { imgSrc: '/images/Gallary/3.png', alt: 'image3' },
        { imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { imgSrc: '/images/Gallary/5.png', alt: 'image5' },
        { imgSrc: '/images/Gallary/4.png', alt: 'image4' },

    ];

    return (
        <div className='max-w-[1320px] mx-auto px-4 md:px-0 mb-40 -mt-20'>
            <div className='mx-auto text-center flex justify-center'>
              <BasicComponent heading='Our GYM environment' subHeading='Gallery'></BasicComponent>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 '>
                {images.map((image, index) => (
                    <ImageContainer key={index} imgSrc={image.imgSrc} alt={image.alt} />
                ))}
            </div>

            <Link href='/gallary'>
                <button className='button mt-10 border-2 flex justify-center'>
                    View All
                </button>
            </Link>
        </div>
    );
};

export default Gallery;
