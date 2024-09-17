'use client';
import React, { useState } from 'react';
import { Collapse } from 'antd';
import { RiArrowDropDownLine } from 'react-icons/ri';

const generalFaqs = [
  {
    key: '1',
    label: 'General FAQ 1',
    children: <p>A dog is a type of domesticated animal.</p>,
  },
  {
    key: '2',
    label: 'General FAQ 2',
    children: <p>Known for its loyalty and faithfulness.</p>,
  },
];

const supportFaqs = [
  {
    key: '1',
    label: 'Support FAQ 1',
    children: <p>This is a support-related question.</p>,
  },
  {
    key: '2',
    label: 'Support FAQ 2',
    children: <p>More support-related questions.</p>,
  },
];

const contactFaqs = [
  {
    key: '1',
    label: 'Contact FAQ 1',
    children: <p>How do I contact support?</p>,
  },
  {
    key: '2',
    label: 'Contact FAQ 2',
    children: <p>What are the office hours?</p>,
  },
];

const serviceFaqs = [
  {
    key: '1',
    label: 'Service FAQ 1',
    children: <p>What services are offered?</p>,
  },
  {
    key: '2',
    label: 'Service FAQ 2',
    children: <p>Are there any premium services?</p>,
  },
];

const Faq: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [activeKey, setActiveKey] = useState<string | string[]>(['1']);

  const handleCollapseChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  const getFaqItems = () => {
    switch (activeTab) {
      case 'support':
        return supportFaqs;
      case 'contact':
        return contactFaqs;
      case 'service':
        return serviceFaqs;
      default:
        return generalFaqs;
    }
  };

  return (
    <div className='max-w-[1320px] mx-auto'>
      <div className='mb-14'>
        <h1 className='heading'>Frequently Asked Questions</h1>
        <p className='para1 mt-10 max-w-[650px]'>
          Lorem ipsum dolor sit amet consectetur. Faucibus dui duis feugiat tempor. Interdum viverra neque arcu nunc hendrerit ullamcorper.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Tab Navigation */}
        <div className='col-span-1 rounded'>
          <div className='px-8 py-10 space-y-6 shadow-custom-light'>
            <div
              className={`border rounded cursor-pointer ${activeTab === 'general' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
              onClick={() => setActiveTab('general')}
            >
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>General</p>
            </div>
            <div
              className={`border rounded cursor-pointer ${activeTab === 'support' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
              onClick={() => setActiveTab('support')}
            >
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>Support Team</p>
            </div>
            <div
              className={`border rounded cursor-pointer ${activeTab === 'contact' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
              onClick={() => setActiveTab('contact')}
            >
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>Contact</p>
            </div>
            <div
              className={`border rounded cursor-pointer ${activeTab === 'service' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
              onClick={() => setActiveTab('service')}
            >
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>Service</p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className='col-span-2 h-fit border border-red-500'>
          
            <Collapse
              accordion
              activeKey={activeKey}
              onChange={handleCollapseChange}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <RiArrowDropDownLine
                  style={{
                    fontSize: '30px',
                    color: isActive ? '#E67529' : 'black',
                    transform: `rotate(${isActive ? 180 : 0}deg)`,
                    transition: 'transform 0.5s ease',
                  }}
                />
              )}
              items={getFaqItems().map(item => ({
                ...item,
                className: `mb-6 py-2 px-4 !border rounded`,
                label: (
                  <span
                    className={`${activeKey.includes(item.key) ? 'text-primary' : 'text-[#534C4C]'
                      } text-xl font-semibold`}
                  >
                    {item.label}
                  </span>
                ),
              }))}
            />
          </div>
       
        </div>
      </div>

  );
};

export default Faq;
