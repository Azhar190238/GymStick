'use client';
import React, { useState } from 'react';
import { Collapse } from 'antd';
import { RiArrowDropDownLine } from 'react-icons/ri';

const faqData: Record<string, { key: string; label: string; content: string }[]> = {
  general: [
    { key: '1', label: 'General FAQ 1', content: 'A dog is a type of domesticated animal.' },{ key: '2', label: 'General FAQ 2', content: 'Known for its loyalty and faithfulness.' },
    { key: '3', label: 'General FAQ 3', content: 'A dog is a type of domesticated animal.' },{ key: '4', label: 'General FAQ 4', content: 'Known for its loyalty and faithfulness.' },
  ],
  support: [
    { key: '1', label: 'Support FAQ 1', content: 'This is a support-related question.' },{ key: '2', label: 'Support FAQ 2', content: 'More support-related questions.' },
    { key: '3', label: 'Support FAQ 3', content: 'This is a support-related question.' },{ key: '4', label: 'Support FAQ 4', content: 'More support-related questions.' },
  ],
  contact: [
    { key: '1', label: 'Contact FAQ 1', content: 'How do I contact support?' },{ key: '2', label: 'Contact FAQ 2', content: 'What are the office hours?' },
    { key: '3', label: 'Contact FAQ 3', content: 'How do I contact support?' },{ key: '4', label: 'Contact FAQ 4', content: 'What are the office hours?' },
  ],
  service: [
    { key: '1', label: 'Service FAQ 1', content: 'What services are offered?' },{ key: '2', label: 'Service FAQ 2', content: 'Are there any premium services?' },
    { key: '3', label: 'Service FAQ 3', content: 'What services are offered?' },{ key: '4', label: 'Service FAQ 4', content: 'Are there any premium services?' },
  ],
};

const Faq: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [activeKey, setActiveKey] = useState<string | string[]>(['1']);
  const tabs = ['general', 'support', 'contact', 'service'];

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="mb-14">
        <h1 className="heading">Frequently Asked Questions</h1>
        <p className="para1 mt-10 max-w-[650px]">
          Lorem ipsum dolor sit amet consectetur. Faucibus dui duis feugiat tempor. Interdum viverra neque arcu nunc hendrerit ullamcorper.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 rounded">
          <div className="px-8 py-10 space-y-6 shadow-custom-light">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`border rounded cursor-pointer ${
                  activeTab === tab ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <p className="px-6 py-4 capitalize text-[16px] font-medium">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <Collapse
            accordion
            activeKey={activeKey}
            onChange={setActiveKey}
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
            items={faqData[activeTab].map((item) => ({
              key: item.key,
              label: (
                <span
                  className={`${
                    activeKey.includes(item.key) ? 'text-primary' : 'text-[#534C4C]'
                  } text-xl font-semibold`}
                >
                  {item.label}
                </span>
              ),
              children: <p>{item.content}</p>,
              className: 'mb-6 py-2 px-4 !border  rounded',
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
