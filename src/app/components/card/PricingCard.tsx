import Image from 'next/image';
import React from 'react';
interface PricingCardProps {
    name: string;
    price: number;
    deadLine: string;
    plan: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price,  plan, deadLine }) => {
    return (
        <section className='hover:scale-105 transition-all duration-500 group  shadow-custom-light'>
            <div>
                <Image src='/images/pricing/1.png' width={424} height={270} alt='images'></Image>
            </div>
            <div className='p-6'>
                <div className=' font-montserrat text-[32px] font-bold text-secondary group-hover:text-primary capitalize '>{name} </div>
                <p className='font-bold font-montserrat text-secondary group-hover:text-primary text-[32px]'>${price} / {deadLine}</p>
                <div className='py-5 '>
                    <ul className='text-[20px] font-normal capitalize list-none pl-4'>
                        {plan.map((item, index) => (
                            <li key={index} className='relative before:content-[""] before:absolute before:left-[-10px] before:top-[50%] before:w-[4px] before:h-[4px] before:bg-black before:rounded-full'>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className='mt-6 mx-auto'>
                        <button className=' px-8 py-4 rounded border-[1px] text-secondary border-primary group-hover:text-white group-hover:bg-primary'>Get Started</button>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default PricingCard;