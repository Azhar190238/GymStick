'use client';
import React, { useState } from 'react';
import BasicComponent from '../shared/BasicComponent';
import PricingCard from '../card/PricingCard';
const pricing = [
    { name: 'Warrior plan', price: 20.24, deadLine: 'per month', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Champion plan', price: 20.24, deadLine: 'per month', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Gladiator plan', price: 20.24, deadLine: 'per month', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Warrior plan', price: 80.24, deadLine: 'per year', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Champion plan', price: 80.24, deadLine: 'per year', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] },
    { name: 'Gladiator plan', price: 80.24, deadLine: 'per year', plan: ['8-12 Training Consultations', 'Training Guidance', '1 Body Composition Analysis', '2 Tabata Sessions', '1 Sauna Treatment'] }
];

const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState('monthly');

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveTab(event.target.checked ? 'yearly' : 'monthly');
    };
    const filteredPricing = pricing.filter((price) => price.deadLine === (activeTab === 'monthly' ? 'per month' : 'per year'));

    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <BasicComponent subHeading='Pricing' heading='Choose the Best Plans' />
            <div className="flex justify-center md:justify-end gap-4 relative bottom-3 md:bottom-12">
                <label className="flex cursor-pointer items-center gap-2">
                    <span 
                        className={`text-xl font-bold transition-colors duration-300 ${activeTab === 'monthly' ? 'text-primary' : 'text-black'}`}
                    >
                        Monthly
                    </span>
                    
                    <input 
                        type="checkbox" 
                        checked={activeTab === 'yearly'} 
                        onChange={handleToggleChange}
                        className="toggle" 
                    />
                    
                    <span 
                        className={`text-xl font-bold transition-colors duration-300 ${activeTab === 'yearly' ? 'text-primary' : 'text-black'}`}
                    >
                        Yearly
                    </span>
                </label>
            </div>
            <div className="p-4 ">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#E6752905]'>
                    {filteredPricing.map((price, index) => (  
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

export default Pricing;
