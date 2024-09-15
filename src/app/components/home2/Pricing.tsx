'use client';
import React, { useState } from 'react';
import BasicComponent from '../shared/BasicComponent';
import Monthly from './Monthly';

const componentMap: Record<string, React.ReactNode> = {
    monthly: <Monthly />,
    yearly: <Monthly /> // Add a different component or functionality for yearly if needed
};

const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState('monthly');

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveTab(event.target.checked ? 'yearly' : 'monthly');
    };

    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <BasicComponent subHeading='Pricing' heading='Choose the Best Plans' />
            <div className="flex justify-end gap-4 mb-4">
                <label className="flex cursor-pointer items-center gap-2">
                    <span 
                        className={`text-xl font-bold ${activeTab === 'monthly' ? 'text-primary' : 'text-black'}`}
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
                        className={`text-xl font-bold ${activeTab === 'yearly' ? 'text-primary' : 'text-black'}`}
                    >
                        Yearly
                    </span>
                </label>
            </div>
            <div className="p-4">
                {componentMap[activeTab]}
            </div>
        </section>
    );
};

export default Pricing;
