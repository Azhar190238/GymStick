/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input } from 'antd';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaFax, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { Flex, Progress } from 'antd';

const TrainerDetails: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Form Data:', values);
        Swal.fire({ title: 'Success!', text: 'Your message has been sent successfully!', icon: 'success', confirmButtonText: 'OK' });
        form.resetFields();
    };
    const contactItems = [
        { icon: <IoPerson />, label: 'Experience', value: 'More Than 10 Years' },
        { icon: <IoMdMail />, label: 'Email', value: 'azhar@gmail.com' },
        { icon: <FaPhoneAlt />, label: 'Phone', value: '+93 274 809' },
        { icon: <FaFax />, label: 'Fax', value: '+93 274 809' },
    ];
    const trainings = [
        { name: 'Strength Training', percent: 80 },
        { name: 'Crossfit Training', percent: 88 },
        { name: 'Self Defence', percent: 84 },
    ];

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='col-span-1'>
                    <Image src='/images/trainer/1.png' width={424} height={520} alt="Trainer" className="object-cover w-full lg:max-w-[424px]  h-full lg:h-[520px] rounded" />
                </div>
                <div className='col-span-2'>
                    <div className='bg-[#1C2021] rounded p-14 text-white'>
                        <h1 className='capitalize text-[32px] font-bold'>dainne russell</h1>
                        <h4 className='capitalize text-[12px] font-medium mt-3 mb-5'>body building coach</h4>
                        <p className='text-[16px] max-w-[580px]'>Milano is a certified Body Builder with over 10 years of experience in Champion Ship And Body Building Tournament.</p>
                        <div className='flex flex-row  space-x-5 mt-6 mb-7'>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <FaXTwitter size={24} />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <FaLinkedin size={24} />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <FaInstagram size={24} />
                            </Link>
                        </div>
                        <hr className='bg-gray-600' />
                        <div className="grid grid-cols-2 mt-8 gap-10">
                            {contactItems.map((item, idx) => (
                                <div key={idx} className="flex space-x-4">
                                    <div className="text-primary text-2xl p-4 bg-white rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[#ABAAAA]">{item.label}</p>
                                        <h1 className="text-lg">{item.value}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-14'>
                <div className='col-span-1'>
                    <div className='border rounded py-9 px-8 h-fit'>
                        <Form
                            form={form} name="wrap" labelAlign="left" labelWrap wrapperCol={{ flex: 1 }} colon={false} style={{ maxWidth: 600 }} className='space-y-5' onFinish={onFinish}
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
                <div className='col-span-2 '>
                    <h1 className='text-[32px] font-semibold text-secondary capitalize'>About mark heris</h1>
                    <p className='para1 my-6 text-justify'>I am striving to be a little better today than I was yesterday. Also, I am striving to help my Gym team member
                        s achieve their goals. We are a Stamin Fitness Center. We offer a variety group of fitness programs, Wanna re
                        ach your Fitness Studio Next Level? Try Our Stamin - Fitness and Gym WordPress Theme today. Stamin Fitness Center. the moreUtilize our Stamin Fitness and Gym WordPress Theme to expose your Gym/Fitness center.</p>
                    <h2 className='text-[32px] font-semibold text-secondary capitalize'>Key Skills</h2>
                    <div className="mt-7 flex flex-col space-y-4">
                        {trainings.map((training, index) => (
                            <div key={index}>
                                <p className="text-[18px] font-semibold text-secondary">{training.name}</p>
                                <Progress percent={training.percent} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrainerDetails;

