import Image from 'next/image';
import React from 'react';

const ImageContainer: React.FC<{ bgSrc: string; imgSrc: string; alt: string }> = ({ bgSrc, imgSrc, alt }) => (
    <div className='relative'>
        <Image src={bgSrc} width={250} height={150} alt={alt} className='absolute -right-[4px] top-0 w-[80%] h-[50%] rounded object-cover '/>
        <Image src={imgSrc}  width={424}  height={350} alt={alt} className='relative z-10 top-[3px] w-full h-[350px]'  />
    </div>
);

const AllGalary: React.FC = () => {
    const images = [
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/1.png', alt: 'image1' },
        { bgSrc: '/images/Gallary/bg2.png', imgSrc: '/images/Gallary/2.png', alt: 'image2' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/3.png', alt: 'image3' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/5.png', alt: 'image5' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/3.png', alt: 'image3' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/5.png', alt: 'image5' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/3.png', alt: 'image3' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/5.png', alt: 'image5' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/3.png', alt: 'image3' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/5.png', alt: 'image5' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/3.png', alt: 'image3' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/4.png', alt: 'image4' },
        { bgSrc: '/images/Gallary/bg1.png', imgSrc: '/images/Gallary/5.png', alt: 'image5' },
    ];

    return (
        <div className='max-w-[1320px] mx-4 md:mx-auto mb-40 -mt-20'>
            <h1 className='heading my-10'>Our GYM environment</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0 md:gap-6'>
            <div className='col-span-1'>
                <ImageContainer bgSrc={images[0].bgSrc} imgSrc={images[0].imgSrc} alt={images[0].alt} />
            </div>
            <div className='hidden md:flex col-span-2'>
                <ImageContainer bgSrc={images[1].bgSrc} imgSrc={images[1].imgSrc} alt={images[1].alt} />
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-6'>
                {images.slice(2).map((image, index) => (
                    <ImageContainer key={index} bgSrc={image.bgSrc} imgSrc={image.imgSrc} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

export default AllGalary;
