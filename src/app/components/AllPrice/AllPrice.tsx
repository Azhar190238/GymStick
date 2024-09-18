'use client';
import React from 'react';

import PricingCard from '../card/PricingCard';
const pricing = [
    { name: 'Warrior plan', price: 20.24, deadLine: 'per month', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Champion plan', price: 20.24, deadLine: 'per month', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Gladiator plan', price: 20.24, deadLine: 'per month', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Warrior plan', price: 80.24, deadLine: 'per year', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Champion plan', price: 80.24, deadLine: 'per year', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Gladiator plan', price: 80.24, deadLine: 'per year', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] }
];

const AllPrice: React.FC = () => {
    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <h1 className='heading mb-14'>The Right plan on pricing</h1>
            <div className="p-4 ">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#E6752905]'>
                    {pricing.map((price, index) => (  
                        <PricingCard 
                            key={index} 
                            name={price.name}
                            price={price.price}
                            deadLine={price.deadLine}
                            plan={price.plan}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllPrice;
