/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input } from 'antd';
import Swal from 'sweetalert2'; // Import SweetAlert

const TrainerDetails: React.FC = () => {
    const [form] = Form.useForm(); // Use Ant Design's form instance

    const onFinish = (values: any) => {
        console.log('Form Data:', values);

        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        form.resetFields();
    };

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='col-span-1'>
                    <div className='space-y-14'>
                        <Image src='/images/Team/1.png' width={424} height={520} alt="Trainer" className="object-cover w-full md:max-w-[424px] max-h-[520px] rounded" />
                        <div className='border rounded py-9 px-8 h-fit'>
                            <Form
                                form={form} 
                                name="wrap"
                                labelAlign="left"
                                labelWrap
                                wrapperCol={{ flex: 1 }}
                                colon={false}
                                style={{ maxWidth: 600 }}
                                className='space-y-5'
                                onFinish={onFinish} 
                            >
                                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                                    <Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary' placeholder='Name *' />
                                </Form.Item>
                                <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                                    <Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary' placeholder='Email *' />
                                </Form.Item>
                                <Form.Item name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                                    <Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary' placeholder='Phone number *' />
                                </Form.Item>
                                <Form.Item name="subject" rules={[{ required: true, message: 'Please enter a subject' }]}>
                                    <Input className='py-3 px-5 text-[16px] text-[#A28989] hover:!border-primary' placeholder='Subject *' />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="default" htmlType="submit" className='!py-3 border w-full text-[18px] font-medium border-primary h-12 !rounded'>
                                        Send
                                    </Button>
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
