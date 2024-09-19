"use client"; 
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input } from 'antd';
const TrainerDetails: React.FC = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='col-span-1'>
                    <div className='space-y-14'>
                        <Image src='/images/Team/1.png' width={424} height={520} alt="Trainer" className="object-cover w-full md:max-w-[424px]  max-h-[520px] rounded" />
                        <div className='border rounded py-9 px-8 h-fit'>
                            <Form
                                name="wrap"
                                labelAlign="left"
                                labelWrap
                                wrapperCol={{ flex: 1 }}
                                colon={false}
                                style={{ maxWidth: 600 }}
                                className='space-y-5'
                            >
                                <Form.Item  name="username"  rules={[{ required: true }]}><Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary'  placeholder='Name *'/> </Form.Item>
                                <Form.Item  name="username"  rules={[{ required: true }]}><Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary'  placeholder='Email *'/> </Form.Item>
                                <Form.Item  name="username"  rules={[{ required: true }]}><Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary'  placeholder='Phone number *'/> </Form.Item>
                                <Form.Item  name="username"  rules={[{ required: true }]}><Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary'  placeholder='Subject *'/> </Form.Item>
                                <Form.Item>
                                <Button className='!py-3 border w-full text-[18px] font-medium  border-primary h-12 !rounded'>Send</Button>
                                </Form.Item>
                            </Form>
                        </div>

                    </div>
                </div>
                <div className='col-span-2'></div>
            </div>
        </div>
    );
};

export default TrainerDetails;
