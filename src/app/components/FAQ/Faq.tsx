'use client';
import React, { useState } from 'react';
import { Collapse } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'This is panel header 4',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'This is panel header 5',
    children: <p>{text}</p>,
  },
];

const Faq: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>([]);

  // Function to handle active item change
  const handleCollapseChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  return (
    <div className='max-w-[1320px] mx-auto'>
      <div className='mb-14'>
        <h1 className='heading'>Frequently Asked Questions</h1>
        <p className='para1 mt-10 max-w-[650px]'>
          Gorem ipsum dolor sit amet consectetur. Faucibus dui duis feugiat tempor. interdum viverra neque arcu nunc hendrerit ullamcorper
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='col-span-1 rounded'>
          <div className='px-8 py-10 space-y-6 shadow-custom-light'>
            <div className='border rounded hover:bg-primary hover:text-white'>
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>general</p>
            </div>
            <div className='border rounded hover:bg-primary hover:text-white'>
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>support team</p>
            </div>
            <div className='border rounded hover:bg-primary hover:text-white'>
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>contact</p>
            </div>
            <div className='border rounded hover:bg-primary hover:text-white'>
              <p className='px-6 py-4 capitalize text-[16px] font-medium'>service</p>
            </div>
          </div>
        </div>
        <div className='col-span-2 h-full'>
          <div className=''>
            <Collapse
              accordion
              activeKey={activeKey}
              onChange={handleCollapseChange}
              expandIconPosition="end" // Moves the icon to the right side
              expandIcon={({ isActive }) => (
                <CaretDownOutlined
                  style={{ fontSize: '16px', color: isActive ? '#E67529' : 'black' }} // Changes color of the icon when active
                  rotate={isActive ? 180 : 0} // Rotates the icon when active
                />
              )}
              items={items.map(item => ({
                ...item,
                className: `mb-6 py-2 px-4 border rounded-md ${activeKey.includes(item.key) ? ' text-white' : 'bg-white text-black'}`, 
               
                label: (
                  <span
                    className={`${
                      activeKey.includes(item.key) ? 'text-primary' : 'text-[#534C4C]'
                    } text-xl font-semibold ` }
                  >
                    {item.label}
                  </span>
                ), 
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
